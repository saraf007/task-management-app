import { Routes } from '@angular/router';
import { LandingShellComponent } from './landing/shell/landing-shell/landing-shell.component';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '',
    component: LandingShellComponent,
  }
];
