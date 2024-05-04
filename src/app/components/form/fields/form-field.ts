export class FormField {
  constructor(
    public name: string,
    public label: string,
    public type: string,
    public placeholder: string,
    public options: any,
    public required: boolean,
    public hidden: boolean,
    public disabled: boolean,
    public readonly: boolean,
    public value: any,
    public errorMessage: string
  ) {}
}
