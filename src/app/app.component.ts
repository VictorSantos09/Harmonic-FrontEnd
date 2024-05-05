import { Component } from '@angular/core';
import {
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { HomepageComponent } from '../../projects';
import {
  FooterComponent,
  FormComponent,
  HeaderComponent,
  NavbarComponent,
} from './components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ButtonModule,
    RouterModule,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    HomepageComponent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    FormComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Harmonic';
}
