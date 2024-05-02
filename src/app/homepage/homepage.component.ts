import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BackgroundImageComponent } from '../components/background-image';
import { CardComponent } from '../components/card/card.component';
import { CarouselComponent } from '../components/carousel';
import { CardModel, CarrouselOptions } from '../components/models';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    CommonModule,
    CarouselComponent,
    CardComponent,
    BackgroundImageComponent,
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent implements OnInit {
  carrouselOptions!: CarrouselOptions;
  cards: CardModel[] = [
    {
      contentName: 'teste',
      image: {
        url: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600',
        alt: 'awd'
      },
      description: '',
      likes: 323,
      title: 'dawd'
    }
  ]

  ngOnInit(): void {
    this.carrouselOptions = {
      images: [
        {
          url: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
      ],
      title: 'Teste',
      numScroll: 1,
      numVisible: 1,
    };
  }
}
