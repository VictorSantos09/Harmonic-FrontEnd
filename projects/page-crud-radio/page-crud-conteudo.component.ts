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
  TableExpandableComponent,
  TipoConteudoModel,
} from '../../src';
import { TableColumn, TableOptions } from '../../src/app/components/table';
import {
  PaisService,
  PlataformaService,
  RadioService,
  TipoConteudoService,
} from '../../src/services';
import { ConteudoDto, ConteudoDtoConsulta, ConteudoPlataformaDTO } from './dto';

@Component({
  selector: 'app-pageCrudRadio',
  standalone: true,
  imports: [TableExpandableComponent, ToastModule, CommonModule],
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
  dataExpandable: any[] = [];

  tableOptions: TableOptions = {
    title: 'Conteúdos',
    dataKey: 'id',
  };

  paises!: PaisModel[];
  tiposConteudos!: TipoConteudoModel[];
  plataformas!: PlataformaModel[];

  formOptions!: FormOptions;

  columns!: TableColumn[];
  columsExpandable!: TableColumn[];

  constructor(
    private _radioService: RadioService,
    private _messengerService: MessengerService,
    private _paisService: PaisService,
    private _tipoConteudoService: TipoConteudoService
  ) {}

  async ngOnInit() {
    await this._buscarDados().then(() => {
      this._setFormOptions();
    });
  }

  private _setFormOptions() {
    this.formOptions = {
      title: 'Conteúdo',
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
          label: 'Spotify',
          name: 'linkspotify',
          type: 'number',
          required: true,
          placeholder: 'Informe a plataforma do conteudo',
          errorMessage: 'Informe a plataforma do conteudo',
          typeElement: 'CHECKBOX',
          optionLabel: 'nome',
          optionValue: 'nome',
        },
        {
          disabled: false,
          label: 'Youtube',
          name: 'linkyoutube',
          type: 'number',
          required: true,
          placeholder: 'Informe a plataforma do conteudo',
          errorMessage: 'Informe a plataforma do conteudo',
          typeElement: 'CHECKBOX',
          optionLabel: 'nome',
          optionValue: 'nome',
        },
        {
          disabled: false,
          label: 'Deezer',
          name: 'linkdeezer',
          type: 'number',
          required: true,
          placeholder: 'Informe a plataforma do conteudo',
          errorMessage: 'Informe a plataforma do conteudo',
          typeElement: 'CHECKBOX',
          optionLabel: 'nome',
          optionValue: 'nome',
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

    this.columsExpandable = [
      {
        name: 'plataforma',
        title: 'Plataforma',
        sortableColumn: true,
      },
      {
        name: 'link',
        title: 'Link',
        sortableColumn: true,
        isLink: true,
      },
      {
        name: 'datacadastro',
        title: 'Data Cadastro',
        sortableColumn: true,
        isDate: true,
      },
    ];
  }

  private async _buscarDados(): Promise<void> {
    await this.buscarPaises();
    await this.buscarTiposConteudos();

    lastValueFrom(this._radioService.getAll())
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

  async buscarPaises() {
    await lastValueFrom(this._paisService.getAll())
      .then((data) => {
        this.paises = data.data;
      })
      .catch((error) => {
        this._messengerService.showError('Erro ao buscar países', error, true);
      });
  }

  async buscarTiposConteudos() {
    await lastValueFrom(this._tipoConteudoService.getAll())
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

  onSaveButtonClick(event: ConteudoPlataformaDTO) {
    const dto = this._createDto(event);

    const sub = this._radioService.insert(dto).subscribe({
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

  onEditButtonClick(event: ConteudoPlataformaDTO) {
    const dto = this._createDto(event);

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

  onRowExpand(event: any) {
    lastValueFrom(
      this._radioService.getDetalhesConteudoPlataformas(event.data.id)
    )
      .then((data) => {
        this.dataExpandable = data.data;
      })
      .catch((error) => {
        this._messengerService.showError(
          'Erro ao buscar detalhes do conteúdo',
          error
        );
      });
  }

  private _createDto(event: ConteudoPlataformaDTO) {
    /*const obj: ConteudoDto = {
      titulo: event.titulo,
      descricao: event.descricao,
      idPais: event.pais.id,
      idTipoConteudo: event.tipoconteudo.id,
      urls: [],
    };*/

    const obj: ConteudoDto = {
      id: event.id,
      descricao: event.descricao,
      idPais: this.paises.find((p) => p.nome === event.pais.nome)?.id || 0,
      idPlataforma: 1,
      idTipoConteudo:
        this.tiposConteudos.find((t) => t.nome === event.tipoconteudo.nome)
          ?.id || 0,
      titulo: event.titulo,
      urls: [],
    };

    if (event.linkdeezer) {
      obj.urls.push(event.linkdeezer);
    }

    if (event.linkspotify) {
      obj.urls.push(event.linkspotify);
    }

    if (event.linkyoutube) {
      obj.urls.push(event.linkyoutube);
    }

    return obj;
  }
}
