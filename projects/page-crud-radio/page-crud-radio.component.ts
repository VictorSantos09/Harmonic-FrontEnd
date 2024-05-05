import { Component, OnInit } from '@angular/core';
import { FormOptions, RadioModel } from '../../src';
import {
  TableColumn,
  TableComponent,
  TableOptions,
} from '../../src/app/components/table';
import { RadioService } from '../../src/services';

@Component({
  selector: 'app-pageCrudRadio',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './page-crud-radio.component.html',
  styleUrl: './page-crud-radio.component.scss',
  providers: [RadioService],
})
export class PageCrudRadioComponent implements OnInit {
  data!: RadioModel[];

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
        value: '',
        placeholder: 'Informe o título da rádio',
        errorMessage: 'Campo obrigatório',
      },
      {
        disabled: false,
        label: 'Descrição',
        name: 'descricao',
        type: 'text',
        required: true,
        value: '',
        placeholder: 'Informe a descrição da rádio',
        errorMessage: 'Campo obrigatório',
      },
      {
        disabled: false,
        label: 'País',
        name: 'pais',
        type: 'text',
        required: true,
        value: '',
        placeholder: 'Informe o país da rádio',
        errorMessage: 'Campo obrigatório',
      },
    ],
  };

  tableOptions: TableOptions = {
    title: 'Rádios',
    dataKey: 'id',
  };

  columns: TableColumn[] = [
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
      title: 'Total Likes',
      name: 'feedback',
      sortableColumn: true,
    },
    {
      title: 'Total Dislikes',
      name: 'feedback',
      sortableColumn: true,
    },
    {
      title: 'Data Cadastro',
      name: 'dataCadastro',
      sortableColumn: true,
      isDate: true,
    },
  ];

  constructor(private _radioService: RadioService) {
    this._buscarDados();
  }

  async ngOnInit(): Promise<void> {}

  _buscarDados() {
    this._radioService.getAll().subscribe({
      next: (data) => {
        this.data = data.data;
      },
      error: (error) => {
        console.error('Erro ao carregar dados:', error);
      },
    });
  }
}
