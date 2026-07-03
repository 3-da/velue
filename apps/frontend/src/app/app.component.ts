import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ToastModule } from 'primeng/toast';

@Component({
  imports: [RouterModule, MenuComponent, ToastModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  protected readonly title = 'Velué';

  ngOnInit(): void {
    // AuthService restores the session (and fetches the user) on construction,
    // so this only needs to set the theme.
    document.documentElement.classList.add('dark-mode');
  }
}
