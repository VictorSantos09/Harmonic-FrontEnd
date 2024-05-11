import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { FormOptions, MessengerService, RadioModel } from '../../src';
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
  templateUrl: './page-crud-radio.component.html',
  styleUrl: './page-crud-radio.component.scss',
  providers: [RadioService, MessengerService, MessageService],
})
export class PageCrudRadioComponent implements OnInit {
  data!: ConteudoDtoConsulta[];
  dataSingle: RadioModel = new RadioModel();

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
      },
      {
        disabled: false,
        label: 'Descrição',
        name: 'descricao',
        type: 'text',
        required: true,
        placeholder: 'Informe a descrição da rádio',
        errorMessage: 'Campo obrigatório',
      },
      {
        disabled: false,
        label: 'País',
        name: 'pais',
        type: 'number',
        required: true,
        placeholder: 'Informe o país da rádio',
        errorMessage: 'Campo obrigatório',
      },
      {
        disabled: false,
        label: 'Tipo Conteudo',
        name: 'tipoconteudo',
        type: 'number',
        required: true,
        placeholder: 'Informe o tipo do conteudo',
        errorMessage: 'Informe de tipo do conteudo',
      },
      {
        disabled: false,
        label: 'Plataforma',
        name: 'plataforma',
        type: 'number',
        required: true,
        placeholder: 'Informe a plataforma do conteudo',
        errorMessage: 'Informe a plataforma do conteudo',
      },
    ],
  };

  tableOptions: TableOptions = {
    title: 'Rádios',
    dataKey: 'id',
  };

  columns: TableColumn[] = [
    {
      title: 'ID',
      name: 'id',
      sortableColumn: true,
    },
    {
      title: 'Título',
      name: 'titulo',
      sortableColumn: true,
    },
    {
      title: 'Descrição',
      name: 'descricao',
      sortableColumn: false,
    },
    {
      title: 'País',
      name: 'pais',
      sortableColumn: true,
    },
    {
      title: 'Total Curtidas',
      name: 'totalCurtidas',
      sortableColumn: true,
    },
    {
      title: 'Total Gosteis',
      name: 'totalGosteis',
      sortableColumn: true,
    },
    {
      title: 'Total Não Gosteis',
      name: 'totalNaoGosteis',
      sortableColumn: true,
    },
    {
      title: 'Tipo',
      name: 'tipoConteudo',
      sortableColumn: true,
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
    this._radioService.getAll().subscribe({
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

          return obj;
        });
      },
      error: (error) => {
        this._messengerService.showError('Erro ao carregar dados', error, true);
      },
    });
  }

  onDeleteButtonClick(event: RadioModel): void {
    if (event.id === undefined) {
      this._messengerService.showError('Registro não encontrado');
      return;
    }

    this._radioService.delete(event.id).subscribe({
      next: () => {
        this._messengerService.showSuccess('Registro deletado com sucesso');
        this._buscarDados();
      },
      error: (error) => {
        this._messengerService.showError(
          'Erro ao deletar registro',
          error,
          true
        );
      },
    });
  }

  onSaveButtonClick(event: RadioModel) {
    const obj: ConteudoDto = {
      titulo: event.titulo,
      descricao: event.descricao,
      idPais: 6,
      idTipoConteudo: 1,
      idPlataforma: 1,
    };

    this._radioService.insert(obj).subscribe({
      next: (value) => {
        this._messengerService.showSuccess('registro gravado');
        this._buscarDados();
      },
      error: (err) => {
        this._messengerService.showError('registro não gravado', err);
      },
    });
  }
}
