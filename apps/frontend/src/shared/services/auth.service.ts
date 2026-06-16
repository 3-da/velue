import { DestroyRef, inject, Injectable, signal } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, firstValueFrom, Observable, tap, throwError } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { LoginRequest, RegisterCustomerRequest, RegisterCustomerResponse, TokenPair, UpdatePasswordRequest } from '@velue/shared-models';
import { Router } from '@angular/router';
import { UserService } from './user.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly baseUrl = `${environment.apiUrl}/auth`;
  private readonly http = inject(HttpClient);
  private readonly router = inject(Router);
  private readonly userService = inject(UserService);
  private readonly destroyRef = inject(DestroyRef);

  // Frontend-owned flag in localStorage. Unlike the auth cookies (which live on
  // the backend domain and are unreadable here), this survives a full page reload
  // such as the round-trip to Stripe Checkout.
  private readonly authFlagKey = 'velue_auth';

  private readonly isAuthenticatedSignal = signal<boolean>(this.hasStoredAuthFlag());
  readonly isAuthenticated = this.isAuthenticatedSignal.asReadonly(); // Computed signal for public access

  constructor() {
    this.restoreSession();
  }

  private restoreSession(): void {
    if (!this.hasStoredAuthFlag()) return;

    // The httpOnly session cookies ride along on this cross-site request, so the
    // backend is the source of truth for whether we're still logged in.
    setTimeout(() => {
      this.userService
        .getCurrentUser()
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe({
          next: () => this.isAuthenticatedSignal.set(true),
          error: () => this.clearAuthData(),
        });
    }, 0);
  }

  private hasStoredAuthFlag(): boolean {
    return localStorage.getItem(this.authFlagKey) === '1';
  }

  private getErrorMessage(error: unknown): string {
    if (error instanceof HttpErrorResponse) {
      // Handle different error response formats
      if (typeof error.error === 'string') {
        return error.error;
      }
      if (error.error && typeof error.error.message === 'string') {
        return error.error.message;
      }
      if (error.error && typeof error.error.error === 'string') {
        return error.error.error;
      }
      return error.message || 'An error occurred';
    }
    if (error instanceof Error) {
      return error.message;
    }
    return 'An unexpected error occurred';
  }

  async loginWithNavigation(loginRequest: LoginRequest): Promise<{ success: boolean; message?: string }> {
    try {
      await firstValueFrom(this.login(loginRequest));
      await this.router.navigate(['/training-sessions']);
      return { success: true };
    } catch (error: unknown) {
      console.error('Login failed:', error);
      const message = this.getErrorMessage(error) || 'Login failed. Please check your credentials.';
      return { success: false, message };
    }
  }

  login(loginRequest: LoginRequest): Observable<TokenPair> {
    return this.http.post<TokenPair>(`${this.baseUrl}/login`, loginRequest).pipe(
      tap(async () => {
        this.markAuthenticated();
        try {
          await firstValueFrom(this.userService.getCurrentUser());
        } catch (error) {
          console.error('Failed to load user data:', error);
        }
      }),
      catchError(error => {
        console.error('Login failed:', error);
        return throwError(() => error);
      }),
    );
  }

  register(registerCustomerRequest: RegisterCustomerRequest): Observable<RegisterCustomerResponse> {
    return this.http
      .post<RegisterCustomerResponse>(`${this.baseUrl}/register`, registerCustomerRequest, {
        withCredentials: true, // Send cookies
      })
      .pipe(
        tap(async () => {
          this.markAuthenticated();
          try {
            await firstValueFrom(this.userService.getCurrentUser());
          } catch (error) {
            console.error('Failed to load user data:', error);
          }
        }),
        catchError(error => {
          console.error('Registration failed:', error);
          return throwError(() => error);
        }),
      );
  }

  async registerWithNavigation(
    registerCustomerRequest: RegisterCustomerRequest,
  ): Promise<{ success: boolean; message?: string }> {
    try {
      await firstValueFrom(this.register(registerCustomerRequest));
      await this.router.navigate(['/training-sessions']);
      return { success: true };
    } catch (error: unknown) {
      console.error('Registration failed:', error);
      const message = this.getErrorMessage(error) || 'Registration failed. Please try again.';
      return { success: false, message };
    }
  }

  refreshToken(): Observable<{ message: string }> {
    return this.http
      .post<{ message: string }>(
        `${this.baseUrl}/refresh`,
        {},
        {
          withCredentials: true, // Send refresh token via cookie
        },
      )
      .pipe(
        catchError(error => {
          console.error('Token refresh failed:', error);
          this.clearAuthData();
          return throwError(() => error);
        }),
      );
  }

  logOut(): Observable<{ message: string }> {
    return this.http
      .post<{ message: string }>(
        `${this.baseUrl}/logout`,
        {},
        {
          withCredentials: true, // Send refresh token via cookie
        },
      )
      .pipe(
        tap(() => this.clearAuthData()),
        catchError(error => {
          // Even if logout fails on server, clear local data
          this.clearAuthData();
          return throwError(() => error);
        }),
      );
  }

  updatePassword(updatePasswordRequest: UpdatePasswordRequest): Promise<{ message: string }> {
    return firstValueFrom(
      this.http
        .put<{ message: string }>(`${this.baseUrl}/update-password`, updatePasswordRequest, {
          withCredentials: true,
        })
        .pipe(
          catchError(error => {
            console.error('Password update failed:', error);
            return throwError(() => error);
          }),
        ),
    );
  }

  forgotPassword(email: string): Promise<{ message: string }> {
    return firstValueFrom(
      this.http
        .post<{ message: string }>(`${this.baseUrl}/forgot-password`, { email })
        .pipe(
          catchError(error => {
            console.error('Forgot password failed:', error);
            return throwError(() => error);
          }),
        ),
    );
  }

  resetPassword(token: string, newPassword: string): Promise<{ message: string }> {
    return firstValueFrom(
      this.http
        .post<{ message: string }>(`${this.baseUrl}/reset-password`, { token, newPassword })
        .pipe(
          catchError(error => {
            console.error('Reset password failed:', error);
            return throwError(() => error);
          }),
        ),
    );
  }

  private markAuthenticated(): void {
    localStorage.setItem(this.authFlagKey, '1');
    this.isAuthenticatedSignal.set(true);
  }

  private clearAuthData(): void {
    localStorage.removeItem(this.authFlagKey);
    this.isAuthenticatedSignal.set(false);
    this.userService.clearUser();
    void this.router.navigate(['/auth']);
  }
}
