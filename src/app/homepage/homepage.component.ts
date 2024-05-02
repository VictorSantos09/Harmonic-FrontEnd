
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardModel, ImageModel } from '../../models';
import { CardComponent } from '../components/card/card.component';
import { CarouselComponent } from '../components/carousel';
import { BackgroundImageComponent } from '../components/background-image';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, CarouselComponent, CardComponent, BackgroundImageComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {
  images: ImageModel[] = [];
  cards: CardModel[] = [];
}