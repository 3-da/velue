import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

// Synchronous gate for protected routes. The auth flag is restored from
// localStorage on AuthService construction, so it is always available here
// without an async round-trip. The 401 interceptor remains the fallback for a
// session that expired server-side.
export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  if (authService.isAuthenticated()) return true;

  return inject(Router).createUrlTree(['/auth']);
};
