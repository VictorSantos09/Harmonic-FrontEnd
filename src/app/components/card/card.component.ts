import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { aspectsLikeFilled } from '@ng-icons/ux-aspects';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { SplitterModule } from 'primeng/splitter';
import { ImageModel } from '../models';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    CommonModule,
    AvatarModule,
    NgIconComponent,
    CardModule,
    ButtonModule,
    SplitterModule,
    PanelModule,
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  viewProviders: [provideIcons({ aspectsLikeFilled })], //importar os icons e depois colocar aqui dentro.
})
export class CardComponent {
  @Input() image!: ImageModel;
  @Input() title!: string;
  @Input() subTitle?: string;
  @Input() description!: string;
  @Input() contentName!: string;
  @Input() customIcon?: string;

  @Input() primaryButtonLabel!: string;
  @Input() secondaryButtonLabel?: string;
}
