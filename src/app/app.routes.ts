import { Routes } from '@angular/router';
import {
  HomepageComponent,
  PageCrudPodcastComponent,
  PageCrudRadioComponent,
} from '../../projects';
import { PageCardComponent } from '../../projects/page-card/page-card.component';
import { PageProfileComponent } from '../../projects/page-profile/page-profile.component';
import { PageRegisterComponent } from '../../projects/page-register/page-register.component';
import { PageLoginPrimengComponent } from '../../projects/pages-primeng/page-login-primeng';
import { AuthGuard, AuthLoginGuard, RegisterGuard } from './guards';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  {
    path: 'radio',
    component: PageCrudRadioComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'podcast',
    component: PageCrudPodcastComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'register',
    component: PageRegisterComponent,
    canActivate: [RegisterGuard],
  },
  {
    path: 'login',
    component: PageLoginPrimengComponent,
    canActivate: [AuthLoginGuard],
  },
  {
    path: 'profile',
    component: PageProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'information',
    component: PageCardComponent,
    data: { contentId: '1' },
    canActivate: [AuthGuard],
  },
];
