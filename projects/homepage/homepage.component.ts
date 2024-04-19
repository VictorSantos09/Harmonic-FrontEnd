import { Component } from '@angular/core';
import { CarouselComponent } from '../../src/app/components/carousel/carousel.component';
import { CardComponent } from '../../src/app/components/card/card.component';
import { CardModel, ImageModel } from '../../src/models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, CarouselComponent, CardComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  images : ImageModel[] = [];
  cards : CardModel[] = [];
}
