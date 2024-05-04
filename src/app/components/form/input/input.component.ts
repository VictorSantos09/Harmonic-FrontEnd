import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { INPUT_TYPES } from '../../shared';
@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule, InputTextModule, FloatLabelModule, CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  @Input() value!: string;
  @Input() id!: string;
  @Input() disabled!: boolean;
  @Input() required!: boolean;
  @Input() label?: string;
  @Input() labelText?: string;
  @Input() placeholder?: string;
  @Input() readonly?: boolean;
  @Input() maxlength?: number;
  @Input() minlength?: number;
  @Input() type?: INPUT_TYPES;
}
