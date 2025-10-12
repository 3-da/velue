import { ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ToastModule } from 'primeng/toast';
import { AuthService } from '../shared/services/auth.service';
import { UserService } from '../shared/services/user.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  imports: [RouterModule, MenuComponent, ToastModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  protected readonly title = 'Velué';
  private authService = inject(AuthService);
  private userService = inject(UserService);
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    document.documentElement.classList.add('dark-mode');

    if (this.authService.isAuthenticated()) {
      this.userService.getCurrentUser().pipe(takeUntilDestroyed(this.destroyRef)).subscribe();
    }
  }
}
