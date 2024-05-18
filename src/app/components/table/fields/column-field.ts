import { FormField } from '../../form';

export class ColumnField extends FormField {
  canEdit!: boolean;
  optionLabelId?: number | string;
}
