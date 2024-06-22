import { Component, OnInit } from '@angular/core';
import { ConteudoCurtidosService } from '../../src/services/conteudoCurtidos.service';
import { ConteudosCurtidosDto, MessengerService, ROUTES_CNT } from '../../src';
import { CommonModule } from '@angular/common';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-page-moments',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  providers: [MessageService, MessengerService],
  templateUrl: './page-moments.component.html',
  styleUrl: './page-moments.component.scss'
})
export class PageMomentsComponent{

  conteudo: ConteudosCurtidosDto = new ConteudosCurtidosDto()
  conteudosCurtidos: ConteudosCurtidosDto[] = [];

  constructor(
    private _router: Router,
    private _conteudoCurtidosService: ConteudoCurtidosService,
    private _messengerService: MessengerService
  ) {
    this._buscarConteudoCurtidos();
  }
  
  private _buscarConteudoCurtidos() {
    const sub = this._conteudoCurtidosService.getAll().subscribe({
      next: (value) => {
        this.conteudosCurtidos = value.data;
        sub.unsubscribe();
      },
      error: (err) => {
        this._messengerService.showError('Erro ao buscar momentos', err);
        sub.unsubscribe();
      },
    });
  }

  onAvatarClick(id: number) {
    this._router.navigate([ROUTES_CNT.CONTEUDO_INFORMACAO, id]);
  }
}
