import { Routes } from '@angular/router';
import {
  HomepageComponent,
  PageCrudPodcastComponent,
  PageCrudRadioComponent,
} from '../../projects';
import { PageCardComponent } from '../../projects/page-card/page-card.component';
import { PageLoginComponent } from '../../projects/page-login/page-login.component';
import { PageProfileComponent } from '../../projects/page-profile/page-profile.component';
import { PageRegisterComponent } from '../../projects/page-register/page-register.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'radio', component: PageCrudRadioComponent },
  { path: 'podcast', component: PageCrudPodcastComponent },
  { path: 'register', component: PageRegisterComponent },
  { path: 'login', component: PageLoginComponent },
  { path: 'profile', component: PageProfileComponent },
  {
    path: 'information',
    component: PageCardComponent,
    data: { contentId: '1' },
  },
];
