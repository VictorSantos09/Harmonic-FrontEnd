import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { AvatarComponent } from '../../src';
import { BackgroundImageComponent } from '../../src/app/components/background-image';
import { CarouselComponent } from '../../src/app/components/carousel';
import { CarrouselOptions, ImageModel } from '../../src/app/components/models';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    CommonModule,
    CarouselComponent,
    BackgroundImageComponent,
    AvatarComponent,
    ButtonModule,
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent implements OnInit {
  carrouselOptions!: CarrouselOptions;
  avatars: ImageModel[] = [
    {
      url: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      url: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      url: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      url: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      url: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      url: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      url: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      url: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      url: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      url: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      url: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      url: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

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
