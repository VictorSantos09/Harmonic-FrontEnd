import { trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { TableColumn, TableOptions } from '../..';
import { FormField } from '../form';
import { FieldHelper } from '../form/fields/field.helper';
import { FormOptions } from '../form/options';
@Component({
  selector: 'app-table-expandable',
  templateUrl: 'table-expandable.component.html',
  standalone: true,
  imports: [
    TableModule,
    DialogModule,
    RippleModule,
    ButtonModule,
    ToastModule,
    ToolbarModule,
    ToastModule,
    ConfirmDialogModule,
    InputTextareaModule,
    CommonModule,
    FileUploadModule,
    DropdownModule,
    TagModule,
    RadioButtonModule,
    InputTextModule,
    FormsModule,
    InputNumberModule,
    FloatLabelModule,
    CheckboxModule,
    InputTextModule,
  ],
  animations: [trigger('fadeInOut', [])],
  providers: [MessageService, ConfirmationService],
})
export class TableExpandableComponent<T> implements OnInit {
  @Input() get formFields(): FormField[] {
    return this._formFields;
  }

  set formFields(value: FormField[]) {
    this._formFields = value;
  }

  @Input() options!: TableOptions;
  @Input() columns!: TableColumn[];
  @Input() formOptions?: FormOptions;
  @Input() optionsExpandable!: TableOptions;
  @Input() columnsExpandable!: TableColumn[];

  @Input() items!: any[];
  @Input() itemsExpandable: any[] = [];

  @Output() onSave: EventEmitter<any> = new EventEmitter<any>();
  @Output() onDeleteSelectedItems: EventEmitter<any> = new EventEmitter<any>();
  @Output() onEdit: EventEmitter<any> = new EventEmitter<any>();
  @Output() onEditCanceled: EventEmitter<any> = new EventEmitter<any>();
  @Output() formFieldsChange = new EventEmitter<FormField[]>();
  @Output() onRowExpand: EventEmitter<any> = new EventEmitter<any>();

  item?: any;
  selectedItems!: any[] | null;
  submitted: boolean = false;
  itemDialog: boolean = false;
  globalFilterFields = ['id'];
  fieldHelper = new FieldHelper();
  expandedRows = {};

  private _formFields!: FormField[];
  private _checkboxCheckeds: any[] = [];

  constructor(private confirmationService: ConfirmationService) {}

  ngOnInit() {
    this.globalFilterFields.push(...this.columns.map((c) => c.name));
  }

  openNew() {
    this.item = {};
    this.submitted = false;
    this.itemDialog = true;
  }

  deleteSelectedItems() {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja deletar esses registros?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.items = this.items.filter(
          (val) => !this.selectedItems?.includes(val)
        );
        this.onDeleteSelectedItems.emit(this.selectedItems);
        this.selectedItems = null;
      },
    });
  }

  edit(item: any) {
    this.item = { ...item };
    this.itemDialog = true;
  }

  delete(item: any) {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja deletar?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.items = this.items.filter((val) => val.id !== item.id);
        this.item = {};

        this.onDeleteSelectedItems.emit(item);
      },
    });
  }

  hideDialog() {
    this.itemDialog = false;
    this.submitted = false;
    //this.item = {};
  }

  onChange(event: any, label: string | undefined) {
    if (event.checked) this._checkboxCheckeds.push(label?.toLowerCase());
    else this._checkboxCheckeds.splice(this._checkboxCheckeds.indexOf(label));

    console.log(event, this._checkboxCheckeds);
  }

  save() {
    this.submitted = true;

    this.items = [...this.items];
    this.itemDialog = false;
    this.item = {};

    const objetoUnico: { [key: string]: any } = this._formFields.reduce(
      (obj: any, item) => {
        if (item.typeElement !== 'CHECKBOX') {
          obj[item.name] = item.value;
        } else if (this._checkboxCheckeds.includes(item.label?.toLowerCase())) {
          let temp = document.getElementById(
            item.name.concat('text')
          ) as HTMLInputElement;
          console.log(temp);
          obj[item.name] = temp.value;
        }
        return obj;
      },
      {}
    );

    const t = objetoUnico as T;
    console.log(t);
    this._formFields.forEach((f) => (f.value = null));

    this.onSave.emit(t);
  }

  getEventValue($event: any): string {
    return $event.target.value;
  }

  onRowEditInit(item: any) {
    this.item = item;
  }

  onRowEditSave(item: any) {
    this.onEdit.emit(this.item);
  }

  onRowEditCancel(item: any, index: number) {
    this.onEditCanceled.emit({
      item: item,
      index: index,
    });
  }

  onRowExpandEvent(event: any) {
    this.onRowExpand.emit(event);
  }
}
