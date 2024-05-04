export class FormTextArea {
  constructor(
    public name: string,
    public label: string,
    public placeholder: string,
    public required: boolean,
    public hidden: boolean,
    public disabled: boolean,
    public readonly: boolean,
    public value: any,
    public errorMessage: string
  ) {}
}
