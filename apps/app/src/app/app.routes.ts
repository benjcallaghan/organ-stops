import { Routes } from '@angular/router';
import { AuthGuard } from './edit-arrangement/auth-guard.guard';

export const routes: Routes = [
  {
    path: 'songs/:key',
    loadComponent: () => import('./hymn/hymn.page'),
  },
  {
    path: 'songs',
    loadComponent: () => import('./songs/songs.page'),
  },
  {
    path: 'terms',
    loadComponent: () => import('./terms/terms.page'),
  },
  {
    path: 'privacy',
    loadComponent: () => import('./privacy/privacy.page'),
  },
  {
    path: 'acknowledgements',
    loadComponent: () => import('./acknowledgements/acknowledgements.page'),
  },
  {
    path: 'user',
    loadComponent: () => import('./user/user.page'),
  },
  {
    path: 'edit',
    loadComponent: () => import('./edit-arrangement/edit-arrangement.page'),
    canActivate: [AuthGuard],
  },
  {
    path: 'register-email',
    loadComponent: () => import('./register-email/register-email.page'),
  },
  {
    path: '',
    redirectTo: 'songs',
    pathMatch: 'full',
  },
];
