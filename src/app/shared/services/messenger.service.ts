import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { MessageModel } from './models';

@Injectable({
  providedIn: 'root',
})
export class MessengerService {
  private DEFAULT_LIFE = 3000;
  constructor(private _messageService: MessageService) {}

  public showSuccess(message: string) {
    this._messageService.add({
      severity: 'success',
      summary: 'Sucesso',
      detail: message,
      life: this.DEFAULT_LIFE,
    });
  }

  public showError(
    message: string,
    error?: any,
    printToConsole: boolean = true
  ) {
    this._messageService.add({
      severity: 'error',
      summary: 'Erro',
      detail: message,
      life: this.DEFAULT_LIFE,
    });

    if (printToConsole) {
      console.error(`${message}. Error: `, error);
    }
  }

  public showInfo(message: string) {
    this._messageService.add({
      severity: 'info',
      summary: 'Informação',
      detail: message,
      life: this.DEFAULT_LIFE,
    });
  }

  public showWarn(message: string) {
    this._messageService.add({
      severity: 'warning',
      summary: 'Aviso',
      detail: message,
      life: this.DEFAULT_LIFE,
    });
  }

  public showCustom(severity: string, summary: string, detail: string) {
    this._messageService.add({
      severity: severity,
      summary: summary,
      detail: detail,
      life: this.DEFAULT_LIFE,
    });
  }

  public showCustomWithModel(obj: MessageModel) {
    this._messageService.add({
      severity: obj.severity,
      summary: obj.summary,
      detail: obj.detail,
      life: obj.life ?? this.DEFAULT_LIFE,
    });
  }
}
