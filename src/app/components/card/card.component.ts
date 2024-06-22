import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { aspectsLikeFilled } from '@ng-icons/ux-aspects';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { SplitterModule } from 'primeng/splitter';
import { TagModule } from 'primeng/tag';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    AvatarModule,
    NgIconComponent,
    CardModule,
    ButtonModule,
    SplitterModule,
    PanelModule,
    TagModule,
    CommonModule,
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  viewProviders: [provideIcons({ aspectsLikeFilled })],
})
export class CardComponent {
  @Input() image!: undefined | string;
  @Input() title!: string | undefined;
  @Input() subTitle?: string | undefined;
  @Input() description!: string | undefined;
  @Input() icon!: string | undefined;
  @Input() pais!: string | undefined;
  @Input() liked!: boolean;
  @Input() width?: string | undefined;
  @Input() applySplitter?: boolean;

  @Input() primaryButtonLabel!: string | undefined;
  @Input() primaryButtonSeverity!: string | undefined;
  @Input() secondaryButtonLabel?: string | undefined;
  @Input() primaryButtonIcon!: string | undefined;
  @Input() secondaryButtonIcon?: string | undefined;
  @Input() secondaryButtonSeverity?: string | undefined;

  @Output() onPrimaryButtonClick: EventEmitter<void> = new EventEmitter<void>();
  @Output() onSecondaryButtonClick: EventEmitter<void> =
    new EventEmitter<void>();

  onPrimaryButtonClicked(): void {
    this.onPrimaryButtonClick.emit();
  }

  onSecondaryButtonClicked(): void {
    this.onSecondaryButtonClick.emit();
  }
}
