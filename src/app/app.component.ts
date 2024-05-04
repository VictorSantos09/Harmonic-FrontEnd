import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { HomepageComponent } from '../../projects/homepage/homepage.component';
import {
  FooterComponent,
  HeaderComponent,
  NavbarComponent,
} from './components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ButtonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    HomepageComponent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Harmonic';
}
