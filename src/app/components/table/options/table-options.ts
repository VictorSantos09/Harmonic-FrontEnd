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
  dataKey?: string = 'id';

  title: string;

  constructor(title: string) {
    this.title = title;
  }
}
