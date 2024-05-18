import { Routes } from '@angular/router';
import { HomepageComponent } from '../../projects';
import { AdminGuard, AuthGuard, AuthLoginGuard, RegisterGuard } from './guards';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  {
    path: 'conteudo',
    loadComponent: () =>
      import('../../projects').then((m) => m.PageConteudoComponent),
    canActivate: [AuthGuard, AdminGuard],
  },
  {
    path: 'register',
    loadComponent: () =>
      import('../../projects').then((m) => m.PageRegisterComponent),
    canActivate: [RegisterGuard],
  },
  {
    path: 'login',
    loadComponent: () =>
      import('../../projects').then((m) => m.PageLoginComponent),
    canActivate: [AuthLoginGuard],
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('../../projects').then((m) => m.PageProfileComponent),
    canActivate: [AuthGuard],
  },
  {
    path: 'information',
    loadComponent: () =>
      import('../../projects').then((m) => m.PageCardComponent),
    data: { contentId: '1' },
    canActivate: [AuthGuard],
  },
];
