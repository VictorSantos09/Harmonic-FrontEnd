import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import {
  CardComponent,
  ConteudoDetalhesDto,
  MessengerService,
  ROUTES_CNT,
  RadioService,
} from '../../src';

@Component({
  selector: 'app-page-explorar',
  standalone: true,
  imports: [CardComponent, ToastModule, CommonModule],
  providers: [RadioService, MessageService, MessengerService],
  templateUrl: './page-explorar.component.html',
  styleUrls: ['./page-explorar.component.css'],
})
export class PageExplorarComponent implements OnInit {
  conteudos: ConteudoDetalhesDto[] = [];

  constructor(
    private _radioService: RadioService,
    private _messengerService: MessengerService,
    private _router: Router
  ) {}

  ngOnInit() {
    this._buscarConteudos();
  }

  onVisualizar(id: number) {
    this._router.navigate([ROUTES_CNT.CONTEUDO_INFORMACAO, id]);
  }

  private _buscarConteudos() {
    const sub = this._radioService.getAllDetalhes().subscribe({
      next: (value) => {
        this.conteudos = value.data;
        sub.unsubscribe();
      },
      error: (err: HttpErrorResponse) => {
        this._messengerService.showError('Erro ao buscar os dados', err);
        sub.unsubscribe();
      },
    });
  }
}
