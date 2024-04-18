import { PageRegisterComponent } from '../../projects/page-register/page-register.component';
import { Routes } from '@angular/router';
import { HomepageComponent } from '../../projects/homepage/homepage.component';
import { PageCrudRadioComponent } from '../../projects/page-crud-radio/page-crud-radio.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'radio', component: PageCrudRadioComponent },
  { path: 'register', component: PageRegisterComponent },
];
