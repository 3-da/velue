import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { UserWithAllRoles } from '@velue/shared-models';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly baseUrl = `${environment.apiUrl}/user`;
  private readonly http = inject(HttpClient);

  private readonly currentUserSignal = signal<UserWithAllRoles | null>(null);

  getCurrentUser(): Observable<UserWithAllRoles> {
    return this.http
      .get<UserWithAllRoles>(`${this.baseUrl}/me`, { withCredentials: true })
      .pipe(tap(user => this.currentUserSignal.set(user)));
  }

  getCurrentUserSignal(): UserWithAllRoles | null {
    return this.currentUserSignal();
  }

  clearUser(): void {
    this.currentUserSignal.set(null);
  }

  getUserCoins(): number {
    const user = this.currentUserSignal();
    return user?.customer?.coins ?? 0;
  }

  deleteAccount(): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/me`, { withCredentials: true });
  }
}