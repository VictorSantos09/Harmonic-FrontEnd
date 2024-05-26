import { ImageModel } from '../../models';
import { ColumnField } from '../fields';

export class TableColumn {
  sortableColumn: boolean = true;
  title: string;
  /** O nome do campo retornado da requisição */
  name: string;
  isImage?: boolean = false;
  image?: ImageModel | undefined;
  isDate?: boolean = false;
  isLink?: boolean = false;
  fieldConfig?: ColumnField;

  constructor(
    title: string,
    name: string,
    sortableColumn: boolean = true,
    isImage?: boolean,
    image?: ImageModel | undefined,
    isDate?: boolean,
    fieldConfig?: ColumnField
  ) {
    this.title = title;
    this.name = name;
    this.sortableColumn = sortableColumn ?? true;
    this.isImage = isImage ?? false;
    this.image = image ?? undefined;
    this.isDate = isDate ?? false;
    this.fieldConfig = fieldConfig;
  }
}
