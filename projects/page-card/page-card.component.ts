import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { SplitterModule } from 'primeng/splitter';
import { ToastModule } from 'primeng/toast';
import { lastValueFrom } from 'rxjs';
import {
  AuthService,
  ConteudoDetalhesDto,
  MessengerService,
  RadioService,
} from '../../src';
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
  providers: [MessengerService, MessageService, RadioService, AuthService],
  templateUrl: './page-card.component.html',
  styleUrl: './page-card.component.scss',
})
export class PageCardComponent implements OnInit {
  conteudo: ConteudoDetalhesDto = new ConteudoDetalhesDto();
  conteudoPlataformasURLs: string[] = [];
  conteudoNaoTemPlataforma: boolean = false;
  conteudoLiked!: boolean;

  private _authState!: boolean;

  constructor(
    private _route: ActivatedRoute,
    private _messengerService: MessengerService,
    private _radioService: RadioService,
    private _authService: AuthService
  ) {}

  ngOnInit(): void {
    this._route.paramMap.subscribe((params) => {
      this.conteudo.id = Number(params.get('id'));
    });

    this._buscarConteudo(this.conteudo.id);

    lastValueFrom(this._authService.isAuthenticated).then((value) => {
      this._authState = value;

      if (this._authState) {
        this.getLiked();
      }
    });
  }

  getLiked() {
    const conteudoLiked = this._radioService
      .getConteudoLiked(this.conteudo.id)
      .subscribe({
        next: (value) => {
          this.conteudoLiked = value.data;
          conteudoLiked.unsubscribe();
        },
        error: (err: HttpErrorResponse) => {
          if (err.status !== 404)
            this._messengerService.showError(err.error.error.message);

          conteudoLiked.unsubscribe();
        },
      });
  }

  onLike() {
    this._messengerService.showSuccess('Curtiu!');
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
      error: (err: HttpErrorResponse) => {
        this._messengerService.showError('Erro ao buscar conteúdo', err);
        sub.unsubscribe();
      },
    });

    const sub2 = this._radioService.getConteudoPlataformasURL(id).subscribe({
      next: (value) => {
        this.conteudoPlataformasURLs = value.data;
        sub2.unsubscribe();
      },
      error: (err: HttpErrorResponse) => {
        if (err.status === 404) {
          this.conteudoNaoTemPlataforma = true;
        } else {
          this._messengerService.showError(err.error.error.message);
        }
        sub2.unsubscribe();
      },
    });
  }
}
