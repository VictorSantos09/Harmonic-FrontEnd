import { INPUT_TYPES } from '../../shared';

export class FormField {
  name!: string;
  type!: INPUT_TYPES;
  typeElement!: FormFieldType;
  required: boolean = true;
  hidden?: boolean = false;
  disabled?: boolean = false;
  readonly?: boolean = false;
  errorMessage?: string;
  placeholder?: string;
  label?: string;
  value?: string | number | boolean | null | undefined | any;
  options?: any[];
  optionLabel?: string;
  optionValue?: string | undefined;
}

export type FormFieldType =
  | 'DROPDOWN'
  | `COMBOBOX`
  | `TEXT-AREA`
  | `INPUT-NUMBER`
  | `INPUT-TEXT`
  | `CHECKBOX`;
