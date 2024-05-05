import { Component, Input } from '@angular/core';
import { ImageModel } from '../models';
import { AvatarModule } from 'primeng/avatar';
import { CommonModule } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { aspectsLikeFilled } from '@ng-icons/ux-aspects';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, AvatarModule, NgIconComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  viewProviders: [provideIcons({aspectsLikeFilled})] //importar os icons e depois colocar aqui dentro
})
export class CardComponent {
  @Input() image!: ImageModel;
  @Input() title!: string;
  @Input() description!: string;
  @Input() contentName!: string;
  @Input() likes!: number;
}
