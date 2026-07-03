import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, Observable, of, switchMap, throwError, timeout } from 'rxjs';
import { AuthService } from '../services/auth.service';

export const httpErrorInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const skipTimeout = req.url.includes('/upload') || req.url.includes('/stream') || req.headers.has('Skip-Timeout');

  const modifiedReq = req.clone({ withCredentials: true });

  let request$ = next(modifiedReq);
  if (!skipTimeout) request$ = request$.pipe(timeout(10000));

  return request$.pipe(
    catchError((error: HttpErrorResponse) => {
      if (!isRefreshableUnauthorized(error, req.url)) {
        return throwError(() => error);
      }

      // A second 401 after a refresh attempt carries Skip-Refresh — give up.
      if (req.headers.has('Skip-Refresh')) {
        return logOutAndRethrow(authService, error);
      }

      return authService.refreshTokenShared().pipe(
        switchMap(() => next(modifiedReq)), // Refresh succeeded, retry the original request
        catchError(() => logOutAndRethrow(authService, error)),
      );
    }),
  );
};

function isRefreshableUnauthorized(error: HttpErrorResponse, url: string): boolean {
  return error.status === 401 && !url.includes('/auth/refresh') && !url.includes('/auth/login');
}

function logOutAndRethrow(authService: AuthService, error: HttpErrorResponse): Observable<never> {
  // Always surface the original error after logout, even if logout itself fails.
  return authService.logOut().pipe(
    catchError(() => of(null)),
    switchMap(() => throwError(() => error)),
  );
}
