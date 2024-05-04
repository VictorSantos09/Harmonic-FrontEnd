import { Component } from '@angular/core';
import { TestComponent } from '../../src/app/components/table/test/test.component';

@Component({
  selector: 'app-pageCrudRadio',
  standalone: true,
  imports: [TestComponent],
  templateUrl: './page-crud-radio.component.html',
  styleUrl: './page-crud-radio.component.scss',
})
export class PageCrudRadioComponent {}
