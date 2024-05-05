export class TableFieldColumnOption {
  FieldName: string;
  FieldTitle: string;
  sortableColumn?: string;

  constructor(obj: TableFieldColumnOption) {
    this.FieldName = obj.FieldName;
    this.FieldTitle = obj.FieldTitle;
    this.sortableColumn = obj.sortableColumn;
  }
}
