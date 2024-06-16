import { Routes } from '@angular/router';
import { HomepageComponent } from '../../projects';
import { AdminGuard, AuthGuard, AuthLoginGuard } from './guards';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  {
    path: 'conteudo',
    loadComponent: () =>
      import('../../projects').then((m) => m.PageConteudoComponent),
    canActivate: [AuthGuard, AdminGuard],
  },
  {
    path: 'tipo-conteudo',
    loadComponent: () =>
      import('../../projects').then((m) => m.PageTipoConteudoComponent),
    canActivate: [AuthGuard, AdminGuard],
  },
  {
    path: 'register',
    loadComponent: () =>
      import('../../projects').then((m) => m.PageRegisterComponent),
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
    path: 'information/:id',
    loadComponent: () =>
      import('../../projects').then((m) => m.PageCardComponent),
    canActivate: [AuthGuard],
  },
  {
    path: 'moments',
    loadComponent: () =>
      import('../../projects').then((m) => m.PageMomentsComponent),
    canActivate: [AuthGuard],
  },
];
