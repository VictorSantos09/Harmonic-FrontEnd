import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { lastValueFrom } from 'rxjs';
import {
  FormOptions,
  MessengerService,
  PaisModel,
  PlataformaModel,
  TipoConteudoModel,
} from '../../src';
import {
  TableColumn,
  TableComponent,
  TableOptions,
} from '../../src/app/components/table';
import {
  PaisService,
  PlataformaService,
  RadioService,
  TipoConteudoService,
} from '../../src/services';
import { ConteudoDto, ConteudoDtoConsulta } from './dto';

@Component({
  selector: 'app-pageCrudRadio',
  standalone: true,
  imports: [TableComponent, ToastModule, CommonModule],
  templateUrl: './page-crud-conteudo.component.html',
  styleUrl: './page-crud-conteudo.component.scss',
  providers: [
    RadioService,
    MessengerService,
    MessageService,
    PaisService,
    TipoConteudoService,
    PlataformaService,
  ],
})
export class PageConteudoComponent implements OnInit {
  data!: ConteudoDtoConsulta[];

  tableOptions: TableOptions = {
    title: 'Conteúdos',
    dataKey: 'id',
  };

  paises!: PaisModel[];
  tiposConteudos!: TipoConteudoModel[];
  plataformas!: PlataformaModel[];

  formOptions!: FormOptions;

  columns!: TableColumn[];

  constructor(
    private _radioService: RadioService,
    private _messengerService: MessengerService,
    private _paisService: PaisService,
    private _tipoConteudoService: TipoConteudoService,
    private _plataformaService: PlataformaService
  ) {}

  async ngOnInit(): Promise<void> {
    await this._buscarDados();

    this.formOptions = {
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
          optionValue: 'nome',
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
          optionValue: 'nome',
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
          optionValue: 'nome',
          options: this.plataformas,
        },
      ],
    };

    this.columns = [
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
          optionValue: 'nome',
          options: this.paises,
          canEdit: true,
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
          options: this.tiposConteudos,
          canEdit: true,
          optionLabelId: 1,
          optionValue: 'nome',
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
    ];
  }

  private async _buscarDados(): Promise<void> {
    this.buscarPaises();
    this.buscarTiposConteudos();
    this.buscarPlataformas();

    return lastValueFrom(this._radioService.getAll())
      .then((data) => {
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
      })
      .catch((error) => {
        this._messengerService.showError('Erro ao carregar dados', error, true);
      });
  }

  buscarPaises(): void {
    lastValueFrom(this._paisService.getAll())
      .then((data) => {
        this.paises = data.data;
      })
      .catch((error) => {
        this._messengerService.showError('Erro ao buscar países', error, true);
      });
  }

  buscarTiposConteudos(): void {
    lastValueFrom(this._tipoConteudoService.getAll())
      .then((data) => {
        this.tiposConteudos = data.data;
      })
      .catch((error) => {
        this._messengerService.showError(
          'Erro ao buscar tipos de conteúdos',
          error,
          true
        );
      });
  }

  buscarPlataformas(): void {
    lastValueFrom(this._plataformaService.getAll())
      .then((data) => {
        this.plataformas = data.data;
      })
      .catch((error) => {
        this._messengerService.showError(
          'Erro ao buscar plataformas',
          error,
          true
        );
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
