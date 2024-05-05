export class TableOptions {
  value!: any[];
  dataKey: string;
  selection: any;
  title!: string;
  rows: number = 10;
  paginator?: boolean = true;
  globalFilterFields?: string[];
  tableStyle?: object = { 'min-width': '75rem' };
  currentPageReportTemplate?: string =
    'Showing {first} to {last} of {totalRecords} entries';
  showCurrentPageReport?: boolean = true;

  constructor(obj: TableOptions) {
    this.value = obj.value;
    this.dataKey = obj.dataKey;
    this.selection = obj.selection;
    this.title = obj.title;
    this.rows = obj.rows;
    this.paginator = obj.paginator;
    this.globalFilterFields = obj.globalFilterFields;
    this.tableStyle = obj.tableStyle;
    this.currentPageReportTemplate = obj.currentPageReportTemplate;
    this.showCurrentPageReport = obj.showCurrentPageReport;
  }
}
