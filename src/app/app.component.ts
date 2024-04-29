import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FooterComponent, HeaderComponent, NavbarComponent, TableRadioComponent } from './components';
import { CarouselComponent } from './components/carousel';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    TableRadioComponent,
    CarouselComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Harmonic';
}
