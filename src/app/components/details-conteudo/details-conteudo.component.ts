import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgIconComponent } from '@ng-icons/core';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { SplitterModule } from 'primeng/splitter';

@Component({
  selector: 'app-details-conteudo',
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
  templateUrl: './details-conteudo.component.html',
  styleUrl: './details-conteudo.component.scss',
})
export class DetailsConteudoComponent {}
