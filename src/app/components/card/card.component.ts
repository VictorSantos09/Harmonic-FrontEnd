import { Component, Input } from '@angular/core';
import { ImageModel } from '../../../models';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() image!: ImageModel;
  @Input() title!: string;
  @Input() description!: string;
  @Input() contentName!: string;
  @Input() likes!: number;
}
