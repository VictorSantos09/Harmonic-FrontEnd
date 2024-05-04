export class FormField {
  required: boolean = true;
  id: string;
  autoFocus?: boolean = true;
  errorMessage: string;
  name!: string;

  constructor(obj: FormField) {
    this.required = obj.required;
    this.id = obj.id;
    this.autoFocus = obj.autoFocus;
    this.errorMessage = obj.errorMessage;
    this.name = obj.name;
  }
}
