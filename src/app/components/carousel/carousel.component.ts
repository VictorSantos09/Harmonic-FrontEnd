import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ImageModel } from '../../../models';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  @Input() images : ImageModel[] = [];
}
