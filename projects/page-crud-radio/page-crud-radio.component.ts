import { Component } from '@angular/core';
import { HeaderComponent } from '../../src/app/components/header';
import { TableRadioComponent } from '../../src/app/components/table-radio';

@Component({
    selector: 'app-pageCrudRadio',
    standalone: true,
    imports: [HeaderComponent, TableRadioComponent],
    templateUrl: './page-crud-radio.component.html',
    styleUrl: './page-crud-radio.component.scss'
  })
  export class PageCrudRadioComponent {
    
  }