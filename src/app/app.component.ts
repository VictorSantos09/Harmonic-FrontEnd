import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { HomepageComponent } from '../../projects/homepage/homepage.component';
import { BackgroundImageComponent } from '../app/components/background-image';
import {
  FooterComponent,
  HeaderComponent,
  NavbarComponent,
  TableRadioComponent,
} from './components';
import { CarouselComponent } from './components/carousel';
import { TestComponent } from './components/table/test/test.component';

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
    TestComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Harmonic';
}
