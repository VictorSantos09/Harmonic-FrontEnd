import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { HomepageComponent } from '../../projects/homepage/homepage.component';
import { BackgroundImageComponent } from '../app/components/background-image/background-image.component';
import {
  FooterComponent,
  HeaderComponent,
  NavbarComponent,
} from '../app/components';
import { TableRadioComponent, } from "../app/components/table/table-radio/table-radio.component";
import { CarouselComponent } from '../app/components/carousel/carousel.component';
import { TestComponent } from '../app/components/table/test/test.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ButtonModule,
    RouterModule,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    TableRadioComponent,
    CarouselComponent,
    HomepageComponent,
    BackgroundImageComponent,
    TestComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Harmonic';
}
