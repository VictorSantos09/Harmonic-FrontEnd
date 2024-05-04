import { Component, OnInit } from '@angular/core';
import { RadioModel } from '../../src';
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
  data: RadioModel[] = [];

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
