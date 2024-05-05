import { Routes } from '@angular/router';
import {
  HomepageComponent,
  PageCrudPodcastComponent,
  PageCrudRadioComponent,
} from '../../projects';
import { PageCardComponent } from '../../projects/page-card/page-card.component';
import { PageRegisterComponent } from '../../projects/page-register/page-register.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'radio', component: PageCrudRadioComponent },
  { path: 'podcast', component: PageCrudPodcastComponent },
  { path: 'register', component: PageRegisterComponent },
  {
    path: 'information',
    component: PageCardComponent,
    data: { contentId: '1' },
  },
];
