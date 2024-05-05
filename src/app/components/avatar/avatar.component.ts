import { Component, Input } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { ImageModel } from '../models';
import { AVATAR_SIZE } from './options';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [AvatarModule],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss',
})
export class AvatarComponent {
  @Input() image!: ImageModel;
  @Input() size!: AVATAR_SIZE;
}
