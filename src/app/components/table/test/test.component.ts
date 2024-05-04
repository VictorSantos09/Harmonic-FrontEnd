import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../models/product';
import { FormField } from '../../models/formField';
import {
  TableFieldColumnOption,
  TableFieldRowOption,
  TableOptions,
} from '../../models/table';
import { TableComponent } from '../table.component';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
})
export class TestComponent implements OnInit {
  ngOnInit(): void {
    console.log('init');
  }
  columns: TableFieldColumnOption[] = [
    {
      FieldName: 'imagem',
      FieldTitle: 'imagem',
    },
    {
      FieldName: 'nome',
      FieldTitle: 'Teste 2',
    },
    {
      FieldName: 'teste',
      FieldTitle: 'Teste 2',
    },
  ];

  fields: FormField[] = [
    {
      errorMessage: 'otario',
      id: '1',
      name: 'penis',
      required: true,
    },
  ];

  products: Product[] = [
    {
      category: 'dawd',
      code: '465',
      description: '456',
      id: '1',
      inventoryStatus: 'cwd',
      price: 46,
      name: '465',
      quantity: 400,
      rating: 4,
    },
  ];

  options: TableOptions = {
    value: this.products,
    dataKey: 'id',
    selection: '',
    title: 'penis',
    rows: 10
  };

  rows: number = 10;
}
