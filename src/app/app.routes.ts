import { PageRegisterComponent } from '../../projects/page-register/page-register.component';
import { Routes } from '@angular/router';
import { HomepageComponent, PageCrudRadioComponent } from '../../projects';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'radio', component: PageCrudRadioComponent },
  { path: 'register', component: PageRegisterComponent },
  { path: 'information', component: PageCardComponent },
];
