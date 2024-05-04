import { Routes } from '@angular/router';
import { HomepageComponent, PageCrudRadioComponent } from '../../projects';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'radio', component: PageCrudRadioComponent },
];
