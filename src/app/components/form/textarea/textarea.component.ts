import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextareaModule } from 'primeng/inputtextarea';
@Component({
  selector: 'app-textarea',
  standalone: true,
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css'],
  imports: [FormsModule, InputTextareaModule, FloatLabelModule],
})
export class TextareaComponent implements OnInit {
  @Input() rows: number = 5;
  @Input() cols: number = 30;
  @Input() title?: string;
  @Input() value!: string;

  constructor() {}

  ngOnInit() {}
}
