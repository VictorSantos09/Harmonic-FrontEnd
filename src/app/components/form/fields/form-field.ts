import { INPUT_TYPES } from '../../shared';

export class FormField {
  constructor(
    public name: string,
    public label: string,
    public type: INPUT_TYPES,
    public placeholder: string,
    public required: boolean,
    public hidden: boolean,
    public disabled: boolean,
    public readonly: boolean,
    public value: string,
    public errorMessage: string
  ) {}
}
