import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, switchMap, throwError, timeout } from 'rxjs';
import { AuthService } from '../services/auth.service';

export const httpErrorInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const skipTimeout = req.url.includes('/upload') || req.url.includes('/stream') || req.headers.has('Skip-Timeout');

  // Add withCredentials to all requests to send cookies
  const modifiedReq = req.clone({
    setHeaders: {},
    withCredentials: true,
  });

  let request$ = next(modifiedReq);

  if (!skipTimeout) request$ = request$.pipe(timeout(10000));

  return request$.pipe(
    catchError((error: HttpErrorResponse) => {
      // Handle 401 errors with automatic token refresh
      if (error.status === 401 && !req.url.includes('/auth/refresh') && !req.url.includes('/auth/login')) {
        if (!req.headers.has('Skip-Refresh')) {
          return authService.refreshToken().pipe(
            switchMap(() => {
              return next(modifiedReq); // Token refresh successful, retry the original request
            }),
            catchError(() => {
              authService.logOut(); // Refresh failed, clear auth data and redirect to log in
              return throwError(() => error);
            }),
          );
        } else {
          authService.logOut(); // Refresh already attempted, sign out
        }
      }

      console.error('HTTP Error:', {
        url: req.url,
        method: req.method,
        status: error.status,
        message: error.message,
      });

      return throwError(() => error);
    }),
  );
};
