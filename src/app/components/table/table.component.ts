import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { ProductService } from '../../../services/product.service';
import { FormComponent } from '../form';
import { FormOptions } from '../form/options';
import { TableColumn, TableOptions } from './options';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-table',
  templateUrl: 'table.component.html',
  standalone: true,
  imports: [
    TableModule,
    DialogModule,
    RippleModule,
    ButtonModule,
    ToastModule,
    ToolbarModule,
    ConfirmDialogModule,
    InputTextModule,
    InputTextareaModule,
    CommonModule,
    FileUploadModule,
    DropdownModule,
    TagModule,
    RadioButtonModule,
    RatingModule,
    InputTextModule,
    FormsModule,
    InputNumberModule,
    FormComponent,
  ],
  providers: [ProductService, MessageService, ConfirmationService],
})
export class TableComponent implements OnInit {
  @Input() options: TableOptions = new TableOptions('Gerenciar');
  @Input() columns!: TableColumn[];

  @Input() formOptions?: FormOptions = {
    cancelText: 'cancelado com sucesso',
    submitText: 'enviado com sucesso',
    title: 'Formulário',
    formFields: [
      {
        disabled: false,
        name: 'name',
        readonly: false,
        errorMessage: 'Name is required',
        hidden: false,
        label: 'Name',
        placeholder: 'Enter your name',
        required: true,
        type: 'text',
        value: '',
      },
      {
        disabled: false,
        name: 'name',
        readonly: false,
        errorMessage: 'Name is required',
        hidden: false,
        label: 'Name',
        placeholder: 'Enter your name',
        required: true,
        type: 'text',
        value: '',
      },
      {
        disabled: false,
        name: 'name',
        readonly: false,
        errorMessage: 'Name is required',
        hidden: false,
        label: 'Name',
        placeholder: 'Enter your name',
        required: true,
        type: 'text',
        value: '',
      },
      {
        disabled: false,
        name: 'name',
        readonly: false,
        errorMessage: 'Name is required',
        hidden: false,
        label: 'Name',
        placeholder: 'Enter your name',
        required: true,
        type: 'text',
        value: '',
      },
    ],
  };

  @Input() items!: any[];
  item!: any;
  selectedItems!: any[] | null;
  submitted: boolean = false;
  itemDialog: boolean = false;

  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit() {}

  openNew() {
    this.item = {};
    this.submitted = false;
    this.itemDialog = true;
  }

  deleteSelectedProducts() {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja deletar esses registros?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.items = this.items.filter(
          (val) => !this.selectedItems?.includes(val)
        );
        this.selectedItems = null;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Products Deleted',
          life: 3000,
        });
      },
    });

    this.selectedItems = null;
    this.messageService.add({
      severity: 'success',
      summary: 'Successful',
      detail: 'Itens deletados',
      life: 3000,
    });
  }

  editProduct(item: Product) {
    this.item = { ...item };
    this.itemDialog = true;
  }

  deleteProduct(value: any) {
    this.confirmationService.confirm({
      message: 'Você tem certeza que deseja deletar ?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.items = this.items.filter((val) => val.id !== this.item.id);
        this.item = {};
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Deletado com sucesso',
          life: 3000,
        });
      },
    });
  }

  hideDialog() {
    this.itemDialog = false;
    this.submitted = false;
  }

  saveProduct() {
    this.submitted = true;

    if (this.item.name?.trim()) {
      if (this.item.id) {
        this.items[this.findIndexById(this.item.id)] = this.item;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Product Updated',
          life: 3000,
        });
      } else {
        this.item.id = this.createId();
        this.item.image = 'product-placeholder.svg';
        this.items.push(this.item);
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Product Created',
          life: 3000,
        });
      }

      this.items = [...this.items];
      this.itemDialog = false;
      this.item = {};
    }
  }

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  }

  createId(): string {
    let id = '';
    var chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }

  getEventValue($event: any): string {
    return $event.target.value;
  }
}
