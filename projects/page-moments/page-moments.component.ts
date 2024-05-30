import { Component, OnInit } from '@angular/core';
import { ConteudoCurtidosService } from '../../src/services/conteudoCurtidos.service';
import { ConteudosCurtidosDto, MessengerService } from '../../src';
import { CommonModule } from '@angular/common';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-page-moments',
  standalone: true,
  imports: [CommonModule],
  providers: [MessageService, MessengerService],
  templateUrl: './page-moments.component.html',
  styleUrl: './page-moments.component.scss'
})
export class PageMomentsComponent{

  conteudo: ConteudosCurtidosDto = new ConteudosCurtidosDto()
  conteudosCurtidos: ConteudosCurtidosDto[] = [];

  constructor(
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
}
