export class TableAddOptions {
  visible?: boolean = true;
  style?: object = { width: '450px' };
  headerText: string;
  modal?: boolean = true;
  styleClass?: string = 'p-fluid';

  constructor(obj: TableAddOptions) {
    this.visible = obj?.visible;
    this.style = obj?.style;
    this.headerText = obj?.headerText;
    this.modal = obj?.modal;
    this.styleClass = obj?.styleClass;
  }
}
