import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { forkJoin } from 'rxjs';
import {
  ConteudoTopDto,
  FooterComponent,
  MessengerService,
  RadioService,
} from '../../src';
import { BackgroundImageComponent } from '../../src/app/components/background-image';
import { CarouselComponent } from '../../src/app/components/carousel';
import { ROUTES_CNT } from '../../src/consts';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    CommonModule,
    CarouselComponent,
    BackgroundImageComponent,
    AvatarModule,
    ButtonModule,
    RouterLink,
    CarouselModule,
    FooterComponent,
  ],
  providers: [MessageService, MessengerService],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent implements OnInit {
  informationRoute = ROUTES_CNT.CONTEUDO_INFORMACAO;

  topRadios: ConteudoTopDto[] = [];
  topPodcasts: ConteudoTopDto[] = [];

  responsiveOptions: any;

  constructor(
    private _router: Router,
    private _radioService: RadioService,
    private _messengerService: MessengerService
  ) {}

  async ngOnInit() {
    this._buscarTopConteudos();
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 5,
        numScroll: 5,
      },
      {
        breakpoint: '991px',
        numVisible: 4,
        numScroll: 4,
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  onAvatarClick(id: number) {
    this._router.navigate([this.informationRoute, id]);
  }

  private _buscarTopConteudos() {
    forkJoin({
      topRadios: this._radioService.getTopRadios(),
      topPodcasts: this._radioService.getTopPodcasts(),
    }).subscribe({
      next: (result) => {
        this.topRadios = result.topRadios.data;
        this.topPodcasts = result.topPodcasts.data;
      },
      error: (err) => {
        this._messengerService.showError(
          'Erro ao buscar os top conteúdos',
          err
        );
      },
    });
  }
}
