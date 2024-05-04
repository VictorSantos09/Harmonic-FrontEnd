import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { BackgroundImageComponent } from '../app/components/background-image';
import {
  FooterComponent,
  HeaderComponent,
  NavbarComponent,
  TableComponent,
  TableRadioComponent,
} from './components';
import { CarouselComponent } from './components/carousel';
import { HomepageComponent } from './homepage/homepage.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ButtonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    TableRadioComponent,
    CarouselComponent,
    HomepageComponent,
    BackgroundImageComponent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    TableComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Harmonic';
}
