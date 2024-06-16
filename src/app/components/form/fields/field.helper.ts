import { FormField, FormFieldType } from './form-field';

export class FieldHelper {
  isDropdownType(field: FormField): boolean {
    return field.typeElement === 'DROPDOWN';
  }

  isComboBoxType(field: FormField): boolean {
    return field.typeElement === 'COMBOBOX';
  }

  isTextAreaType(field: FormField): boolean {
    return field.typeElement === 'TEXT-AREA';
  }

  isInputNumberType(field: FormField): boolean {
    return field.typeElement === 'INPUT-NUMBER';
  }

  isInputTextType(field: FormField): boolean {
    return field.typeElement === 'INPUT-TEXT';
  }

  isCheckBoxType(field: FormField): boolean {
    return field.typeElement === 'CHECKBOX';
  }

  isElementType(field: FormField, type: FormFieldType): boolean {
    return field.typeElement === type;
  }
}
