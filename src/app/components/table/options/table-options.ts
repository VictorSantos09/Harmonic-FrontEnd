export class TableOptions {
  rowsNumber?: number = 10;
  usePaginator?: boolean = true;
  globalFilterFields?: string[] = [
    'name',
    'country.name',
    'representative.name',
    'status',
    'id',
  ];
  dataKey: string = 'id';

  title: string;

  constructor(
    title: string,
    rowsNumber?: number,
    usePaginator?: boolean,
    globalFilterFields?: string[],
    dataKey?: string
  ) {
    this.title = title;
    this.rowsNumber = rowsNumber || this.rowsNumber;
    this.usePaginator = usePaginator || this.usePaginator;
    this.globalFilterFields = globalFilterFields || this.globalFilterFields;
    this.dataKey = dataKey || this.dataKey;
  }
}
