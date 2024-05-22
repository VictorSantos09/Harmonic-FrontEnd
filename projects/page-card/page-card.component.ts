import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { SplitterModule } from 'primeng/splitter';
import { ToastModule } from 'primeng/toast';
import { ConteudoDetalhesDto, MessengerService, RadioService } from '../../src';
import { CardComponent } from '../../src/app/components/card/card.component';

@Component({
  selector: 'app-page-card',
  standalone: true,
  imports: [
    CardComponent,
    CommonModule,
    ToastModule,
    SplitterModule,
    CardModule,
  ],
  providers: [MessengerService, MessageService, RadioService],
  templateUrl: './page-card.component.html',
  styleUrl: './page-card.component.scss',
})
export class PageCardComponent implements OnInit {
  conteudo: ConteudoDetalhesDto = new ConteudoDetalhesDto();
  conteudoPlataformasURLs: string[] = [];
  id!: number;

  constructor(
    private _route: ActivatedRoute,
    private _messengerService: MessengerService,
    private _radioService: RadioService
  ) {}

  ngOnInit(): void {
    this._route.paramMap.subscribe((params) => {
      this.conteudo.id = Number(params.get('id'));
      console.log(this.conteudo.id);
    });
    this._buscarConteudo(this.conteudo.id);
    console.log('init', this.conteudo.id);
  }

  onLike() {
    console.log('call', this.conteudo.id);
    this._radioService.like(12).subscribe({
      next: (value) => {
        this._messengerService.showSuccess('Curtiu!');
      },
      error: (err) => {
        this._messengerService.showError('Erro ao curtir', err);
      },
    });
  }

  onDislike() {
    this._messengerService.showSuccess('Descurtiu!');
  }

  extrairNomePlataforma(url: string): string {
    if (url.includes('youtube')) {
      return 'Youtube';
    } else if (url.includes('spotify')) {
      return 'Spotify';
    } else if (url.includes('deezer')) {
      return 'Deezer';
    } else if (url.includes('soundcloud')) {
      return 'Soundcloud';
    }
    return 'Plataforma desconhecida';
  }

  private _buscarConteudo(id: number) {
    const sub = this._radioService.getDetalhes(id).subscribe({
      next: (value) => {
        this.conteudo = value.data;
        sub.unsubscribe();
      },
      error: (err) => {
        this._messengerService.showError('Erro ao buscar conteúdo', err);
        sub.unsubscribe();
      },
    });

    const sub2 = this._radioService.getConteudoPlataformasURL(id).subscribe({
      next: (value) => {
        this.conteudoPlataformasURLs = value.data;
        sub2.unsubscribe();
      },
      error: (err) => {
        this._messengerService.showError(
          'Erro ao buscar as plataformas do conteúdo',
          err
        );
        sub2.unsubscribe();
      },
    });
  }
}
