import { Route } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { TrainingSessionsComponent } from './training-sessions/training-sessions.component';
import { HomeComponent } from './home/home.component';
import { CoinsComponent } from './coins/coins.component';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { EmailHistoryComponent } from './email-history/email-history.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { authGuard } from './auth/auth.guard';

export const appRoutes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'pricing', component: CoinsComponent, canActivate: [authGuard] },
  { path: 'training-sessions', component: TrainingSessionsComponent, canActivate: [authGuard] },
  { path: 'my-bookings', component: MyBookingsComponent, canActivate: [authGuard] },
  { path: 'email-history', component: EmailHistoryComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: '' }
];
