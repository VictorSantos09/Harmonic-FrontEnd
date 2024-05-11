import { FormField } from '../fields';

export class FormOptions {
  static readonly DEFAULT_WIDTH = 800;
  title!: string;
  submitText!: string;
  cancelText!: string;
  formFields!: FormField[];
  width?: number = FormOptions.DEFAULT_WIDTH;
}
