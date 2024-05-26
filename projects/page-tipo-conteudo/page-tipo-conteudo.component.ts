import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { lastValueFrom } from 'rxjs';
import {
  FormField,
  FormOptions,
  MessengerService,
  TableColumn,
  TableComponent,
  TableOptions,
  TipoConteudoModel,
  TipoConteudoService,
} from '../../src';

@Component({
  selector: 'app-page-tipo-conteudo',
  standalone: true,
  imports: [TableComponent, CommonModule, ToastModule],
  providers: [TipoConteudoService, MessageService, MessengerService],
  templateUrl: './page-tipo-conteudo.component.html',
  styleUrl: './page-tipo-conteudo.component.scss',
})
export class PageTipoConteudoComponent implements OnInit {
  options: TableOptions = {
    dataKey: 'id',
    title: 'Tipos de Conteúdo',
  };

  formFields: FormField[] = [
    {
      name: 'nome',
      label: 'Nome',
      type: 'text',
      required: true,
      typeElement: 'INPUT-TEXT',
      placeholder: 'Informe o nome do tipo de conteúdo',
    },
  ];

  formOptions: FormOptions = {
    cancelText: 'Cancelar',
    submitText: 'Salvar',
    title: 'Adicionar Tipo de Conteúdo',
    formFields: this.formFields,
  };

  columns: TableColumn[] = [
    {
      name: 'id',
      title: 'ID',
      sortableColumn: true,
      fieldConfig: {
        name: 'id',
        canEdit: false,
        typeElement: 'INPUT-TEXT',
        type: 'text',
        required: false,
      },
    },
    {
      name: 'nome',
      title: 'Nome',
      sortableColumn: true,
      fieldConfig: {
        name: 'name',
        canEdit: true,
        typeElement: 'INPUT-TEXT',
        type: 'text',
        required: true,
      },
    },
  ];

  items: TipoConteudoModel[] = [];

  async ngOnInit(): Promise<void> {
    await this._buscarDados();
  }

  constructor(
    private _tipoConteudoService: TipoConteudoService,
    private _messengerService: MessengerService
  ) {}

  private async _buscarDados() {
    return lastValueFrom(this._tipoConteudoService.getAll())
      .then((data) => {
        this.items = data.data;
      })
      .catch((error) => {
        this._messengerService.showError('Erro ao buscar dados');
      });
  }

  onEditCanceled(event: any) {
    this._messengerService.showInfo('Edição cancelada');
  }

  onSave(event: any) {
    this._messengerService.showInfo('Salvo com sucesso');
  }

  onEdit(event: any) {
    this._messengerService.showInfo('Editado com sucesso');
  }

  onDeleteSelectedItems(event: any) {
    this._messengerService.showInfo('Deletado com sucesso');
  }
}
