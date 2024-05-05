import { INPUT_TYPES } from '../../shared';

export class FormField {
  required?: boolean = true;
  disabled: boolean = false;
  readonly?: boolean = false;

  constructor(
    public name: string,
    public label: string,
    public type: INPUT_TYPES,
    public value: string,
    public placeholder?: string,
    required?: boolean,
    public hidden?: boolean,
    disabled?: boolean,
    readonly?: boolean,
    public errorMessage?: string
  ) {
    this.required = required ?? true;
    this.disabled = disabled ?? false;
    this.readonly = readonly ?? false;
  }
}
