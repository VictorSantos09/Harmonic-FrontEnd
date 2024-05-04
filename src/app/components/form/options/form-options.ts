import { FormButton, FormField } from '../fields';

export class FormOptions {
  constructor(
    public title: string,
    public submitText: string,
    public cancelText: string,
    public formGroup: any,
    public formFields: FormField[],
    public formButtons: FormButton[]
  ) {}
}
