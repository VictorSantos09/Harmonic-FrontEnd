import { FormField } from '../fields';

export class FormOptions {
  constructor(
    public title: string,
    public submitText: string,
    public cancelText: string,
    public formFields: FormField[]
  ) {}
}
