import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { CarrouselOptions } from './../models/carouselOptions';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [
    CommonModule,
    CarouselModule,
    TagModule,
    ButtonModule,
    CardModule,
    AvatarModule,
  ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent implements OnInit {
  @Input() options!: CarrouselOptions;

  constructor() {}

  ngOnInit() {}
}
