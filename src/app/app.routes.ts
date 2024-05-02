import { Routes } from '@angular/router';
import { PageCrudRadioComponent } from '../../projects/page-crud-radio/page-crud-radio.component';
import { HomepageComponent } from './homepage/homepage.component';

export const routes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: 'page-crud-radio', component: PageCrudRadioComponent },
];
