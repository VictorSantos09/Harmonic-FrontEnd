import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormField } from './fields/form-field';
import { InputComponent } from './input';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  standalone: true,
  imports: [InputComponent, CommonModule],
})
export class FormComponent implements OnInit {
  @Input() fields: FormField[] = [];

  constructor() {}

  ngOnInit() {}
}
