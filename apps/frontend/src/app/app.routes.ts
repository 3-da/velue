import { Route } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { TrainingSessionsComponent } from './training-sessions/training-sessions.component';
import { HomeComponent } from './home/home.component';
import { CoinsComponent } from './coins/coins.component';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { EmailHistoryComponent } from './email-history/email-history.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

export const appRoutes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'pricing', component: CoinsComponent },
  { path: 'training-sessions', component: TrainingSessionsComponent },
  { path: 'my-bookings', component: MyBookingsComponent },
  { path: 'email-history', component: EmailHistoryComponent },
  { path: '**', redirectTo: '' }
];
