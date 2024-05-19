import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { FormOptions, MessengerService } from '../../src';
import {
  TableColumn,
  TableComponent,
  TableOptions,
} from '../../src/app/components/table';
import { RadioService } from '../../src/services';
import { ConteudoDto, ConteudoDtoConsulta } from './dto';

@Component({
  selector: 'app-pageCrudRadio',
  standalone: true,
  imports: [TableComponent, ToastModule],
  templateUrl: './page-crud-conteudo.component.html',
  styleUrl: './page-crud-conteudo.component.scss',
  providers: [RadioService, MessengerService, MessageService],
})
export class PageConteudoComponent implements OnInit {
  data!: ConteudoDtoConsulta[];
  paises = [
    { nome: 'brasil', id: 6 },
    { nome: 'Australia', id: 2 },
    { nome: 'China', id: 3 },
    { nome: 'Egypt', id: 4 },
    { nome: 'France', id: 5 },
    { nome: 'Germany', id: 6 },
    { nome: 'India', id: 7 },
    { nome: 'Japan', id: 8 },
    { nome: 'Spain', id: 9 },
  ];

  tiposConteudos = [
    { nome: 'Rádio', id: 1 },
    { nome: 'Podcast', id: 3 },
  ];

  plataformas = [
    { nome: 'Spotify', id: 1 },
    { nome: 'Youtube', id: 2 },
    { nome: 'Deezer', id: 3 },
  ];

  formOptions: FormOptions = {
    title: 'Rádio',
    cancelText: 'Cancelar',
    submitText: 'Salvar',
    formFields: [
      {
        disabled: false,
        label: 'Título',
        name: 'titulo',
        type: 'text',
        required: true,
        placeholder: 'Informe o título da rádio',
        errorMessage: 'Campo obrigatório',
        typeElement: 'INPUT-TEXT',
      },
      {
        disabled: false,
        label: 'Descrição',
        name: 'descricao',
        type: 'text',
        required: true,
        placeholder: 'Informe a descrição da rádio',
        errorMessage: 'Campo obrigatório',
        typeElement: 'TEXT-AREA',
      },
      {
        disabled: false,
        label: 'País',
        name: 'pais',
        type: 'number',
        required: true,
        placeholder: 'Informe o país da rádio',
        errorMessage: 'Campo obrigatório',
        typeElement: 'DROPDOWN',
        optionLabel: 'nome',
        options: this.paises,
      },
      {
        disabled: false,
        label: 'Tipo Conteudo',
        name: 'tipoconteudo',
        type: 'number',
        required: true,
        placeholder: 'Informe o tipo do conteudo',
        errorMessage: 'Informe de tipo do conteudo',
        typeElement: 'DROPDOWN',
        optionLabel: 'nome',
        options: this.tiposConteudos,
      },
      {
        disabled: false,
        label: 'Plataforma',
        name: 'plataforma',
        type: 'number',
        required: true,
        placeholder: 'Informe a plataforma do conteudo',
        errorMessage: 'Informe a plataforma do conteudo',
        typeElement: 'DROPDOWN',
        optionLabel: 'nome',
        options: this.plataformas,
      },
    ],
  };

  tableOptions: TableOptions = {
    title: 'Conteúdos',
    dataKey: 'id',
  };

  columns: TableColumn[] = [
    {
      title: 'ID',
      name: 'id',
      sortableColumn: true,
      fieldConfig: {
        name: 'id',
        type: 'number',
        typeElement: 'INPUT-NUMBER',
        required: false,
        hidden: true,
        canEdit: false,
      },
    },
    {
      title: 'Título',
      name: 'titulo',
      sortableColumn: true,
      fieldConfig: {
        name: 'titulo',
        type: 'text',
        typeElement: 'INPUT-TEXT',
        required: true,
        placeholder: 'Informe o título da rádio',
        errorMessage: 'Campo obrigatório',
        canEdit: true,
      },
    },
    {
      title: 'Descrição',
      name: 'descricao',
      sortableColumn: false,
      fieldConfig: {
        name: 'descricao',
        type: 'text',
        typeElement: 'TEXT-AREA',
        required: true,
        placeholder: 'Informe a descrição da rádio',
        errorMessage: 'Campo obrigatório',
        canEdit: true,
      },
    },
    {
      title: 'País',
      name: 'pais',
      sortableColumn: true,
      fieldConfig: {
        name: 'pais',
        type: 'number',
        typeElement: 'DROPDOWN',
        required: true,
        placeholder: 'Informe o país da rádio',
        errorMessage: 'Campo obrigatório',
        optionLabel: 'nome',
        optionLabelId: 1,
        options: [
          { nome: 'Brazil', id: 6 },
          { nome: 'Australia', id: 2 },
          { nome: 'China', id: 3 },
          { nome: 'Egypt', id: 4 },
          { nome: 'France', id: 5 },
          { nome: 'Germany', id: 6 },
          { nome: 'India', id: 7 },
          { nome: 'Japan', id: 8 },
          { nome: 'Spain', id: 9 },
        ],
        canEdit: true,
      },
    },
    {
      title: 'Total Curtidas',
      name: 'totalCurtidas',
      sortableColumn: true,
      fieldConfig: {
        name: 'totalCurtidas',
        type: 'number',
        typeElement: 'INPUT-NUMBER',
        required: false,
        hidden: true,
        canEdit: false,
      },
    },
    {
      title: 'Total Gosteis',
      name: 'totalGosteis',
      sortableColumn: true,
      fieldConfig: {
        name: 'totalGosteis',
        type: 'number',
        typeElement: 'INPUT-NUMBER',
        required: false,
        hidden: true,
        canEdit: false,
      },
    },
    {
      title: 'Total Não Gosteis',
      name: 'totalNaoGosteis',
      sortableColumn: true,
      fieldConfig: {
        name: 'totalNaoGosteis',
        type: 'number',
        typeElement: 'INPUT-NUMBER',
        required: false,
        hidden: true,
        canEdit: false,
      },
    },
    {
      title: 'Tipo',
      name: 'tipoConteudo',
      sortableColumn: true,
      fieldConfig: {
        disabled: false,
        label: 'Tipo Conteudo',
        name: 'tipoconteudo',
        type: 'number',
        required: true,
        placeholder: 'Informe o tipo do conteudo',
        errorMessage: 'Informe de tipo do conteudo',
        typeElement: 'DROPDOWN',
        optionLabel: 'nome',
        options: [
          { nome: 'Rádio', id: 1 },
          { nome: 'Podcast', id: 3 },
        ],
        canEdit: true,
        optionLabelId: 1,
      },
    },
  ];

  constructor(
    private _radioService: RadioService,
    private _messengerService: MessengerService
  ) {
    this._buscarDados();
  }

  async ngOnInit(): Promise<void> {}

  _buscarDados() {
    const sub = this._radioService.getAll().subscribe({
      next: (data) => {
        this.data = data.data.map((item) => {
          const obj: ConteudoDtoConsulta = {
            titulo: item.titulo,
            descricao: item.descricao,
            pais: item.pais.nome,
            tipoConteudo: item.tipoConteudo.nome,
            totalCurtidas: item.feedback.totalCurtidas,
            totalGosteis: item.feedback.totalGosteis,
            totalNaoGosteis:
              item.feedback.totalCurtidas - item.feedback.totalGosteis,
            id: item.id,
            dataCadastro: item.dataCadastro,
          };

          sub.unsubscribe();
          return obj;
        });
      },
      error: (error) => {
        this._messengerService.showError('Erro ao carregar dados', error, true);
        sub.unsubscribe();
      },
    });
  }

  onDeleteButtonClick(event: ConteudoDtoConsulta[]): void {
    if (!event) {
      this._messengerService.showError('Registro não encontrado');
      return;
    }

    const ids = event.map((e) => e.id);

    this._radioService.deleteRange(ids).subscribe({
      next: () => {
        this._messengerService.showSuccess('Registros deletados com sucesso');
        this._buscarDados();
      },
      error: (error) => {
        this._messengerService.showError(
          'Erro ao deletar registros',
          error,
          true
        );
      },
    });
  }

  onSaveButtonClick(event: any) {
    const obj: ConteudoDto = {
      titulo: event.titulo,
      descricao: event.descricao,
      idPais: event.pais.id,
      idTipoConteudo: event.tipoconteudo.id,
      idPlataforma: 0,
    };

    const sub = this._radioService.insert(obj).subscribe({
      next: (value) => {
        this._messengerService.showSuccess('registro gravado');
        this._buscarDados();
        sub.unsubscribe();
      },
      error: (err) => {
        this._messengerService.showError('registro não gravado', err);
        sub.unsubscribe();
      },
    });
  }

  onEditButtonClick(event: any) {
    const dto = {
      descricao: event.descricao,
      idPais: this.paises.find((p) => p.nome === event.pais)?.id || 0,
      idPlataforma: 1,
      idTipoConteudo:
        this.tiposConteudos.find((t) => t.nome === event.tipoConteudo)?.id || 0,
      titulo: event.titulo,
      id: event.id,
    };

    const sub = this._radioService.update(dto).subscribe({
      next: (value) => {
        this._messengerService.showSuccess('Conteúdo atualizado com sucesso');
        sub.unsubscribe();
        this._buscarDados();
      },
      error: (err) => {
        this._messengerService.showError(
          'Não foi possível atualizar o conteúdo',
          err
        );
        this._buscarDados();
        sub.unsubscribe();
      },
    });
  }

  onEditCanceled(event: any) {
    this._messengerService.showInfo('Edição cancelada');
  }
}
