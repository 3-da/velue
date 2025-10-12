import { DestroyRef, inject, Injectable, signal } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, firstValueFrom, Observable, tap, throwError } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  LoginRequest,
  RegisterCustomerRequest,
  RegisterCustomerResponse,
  TokenPair,
  UpdatePasswordRequest,
} from '@velue/shared-models';
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

  private readonly isAuthenticatedSignal = signal<boolean>(this.checkAuthFromCookie());
  readonly isAuthenticated = this.isAuthenticatedSignal.asReadonly(); // Computed signal for public access

  constructor() {
    if (this.isAuthenticated()) {
      // Load user data in background, don't block app startup
      setTimeout(() => {
        this.userService
          .getCurrentUser()
          .pipe(takeUntilDestroyed(this.destroyRef))
          .subscribe({
            error: () => {
              this.clearAuthData();
            },
          });
      }, 0);
    }
  }

  private checkAuthFromCookie(): boolean {
    return document.cookie.includes('auth_state=authenticated');
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
        this.isAuthenticatedSignal.set(true);
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
          this.isAuthenticatedSignal.set(true);
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
      this.http.post<{ message: string }>(`${this.baseUrl}/forgot-password`, { email }).pipe(
        catchError(error => {
          console.error('Forgot password failed:', error);
          return throwError(() => error);
        }),
      ),
    );
  }

  resetPassword(token: string, newPassword: string): Promise<{ message: string }> {
    return firstValueFrom(
      this.http.post<{ message: string }>(`${this.baseUrl}/reset-password`, { token, newPassword }).pipe(
        catchError(error => {
          console.error('Reset password failed:', error);
          return throwError(() => error);
        }),
      ),
    );
  }

  private clearAuthData(): void {
    this.isAuthenticatedSignal.set(false);
    this.userService.clearUser();
    void this.router.navigate(['/auth']);
  }
}
