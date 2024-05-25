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
  id!: number;
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
      this._buscarConteudo(this.conteudo.id);
      this.getUsuarioReacao();
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
    this._radioService
      .like(this.conteudo.id)
      .then((x) => {
        this._messengerService.showSuccess('Curtiu!');
      })
      .catch((err) => {
        this._messengerService.showError('Erro ao curtir', err);
      });
  }

  onDislike() {
    this._radioService
      .dislike(this.conteudo.id)
      .then((x) => {
        this._messengerService.showSuccess('Descurtiu!');
      })
      .catch((err) => {
        this._messengerService.showError('Erro ao descurtir', err);
      });
  }

  getUsuarioReacao() {
    const sub = this._radioService
      .getUsuarioReacao(this.conteudo.id)
      .subscribe({
        next: (value) => {
          if (value.data) {
            this._messengerService.showSuccess('Você curtiu esse conteúdo');
          } else {
            this._messengerService.showSuccess('Você não curtiu esse conteúdo');
          }

          sub.unsubscribe();
        },
        error: (err) => {
          this._messengerService.showError(
            'Erro ao buscar reação do usuário',
            err
          );

          sub.unsubscribe();
        },
      });
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
