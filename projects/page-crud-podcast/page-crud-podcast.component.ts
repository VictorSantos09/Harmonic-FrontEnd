import { Component, OnInit } from '@angular/core';
import {
  FormOptions,
  RadioModel,
  TableColumn,
  TableComponent,
  TableOptions,
} from '../../src';
import { RadioService } from '../../src/services';

@Component({
  selector: 'app-page-crud-podcast',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './page-crud-podcast.component.html',
  styleUrl: './page-crud-podcast.component.scss',
  providers: [RadioService],
})
export class PageCrudPodcastComponent implements OnInit {
  columns: TableColumn[] = [
    {
      name: 'titulo',
      title: 'Titulo',
      sortableColumn: true,
    },
    {
      name: 'descricao',
      title: 'Descrição',
      sortableColumn: false,
    },
  ]; // depois adicionar colunas restantes do banco referente ao conteudo;

  formOptions!: FormOptions; // depois fazer quando finalizado o componente do form
  options: TableOptions = {
    title: 'Gerenciar Podcasts',
    dataKey: 'id',
  };
  data: RadioModel[] = []; // depois criar model do podcast

  constructor(private _radioService: RadioService) {} //mudar para podcast

  ngOnInit(): void {
    this._radioService.getAll().subscribe({
      next: (data) => {
        this.data = data.data;
      },
      error: (err) => {
        console.error('não foi possível buscar os podcasts', err);
      },
    });
  }
}
