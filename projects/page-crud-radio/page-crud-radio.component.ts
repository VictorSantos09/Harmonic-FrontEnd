import { Component } from '@angular/core';
import { TableRadioComponent } from '../../src/app/components/table-radio';
import { TableComponent } from '../../src/app/components/table';

@Component({
    selector: 'app-pageCrudRadio',
    standalone: true,
    imports: [TableComponent],
    templateUrl: './page-crud-radio.component.html',
    styleUrl: './page-crud-radio.component.scss'
  })
  export class PageCrudRadioComponent {
    
  }