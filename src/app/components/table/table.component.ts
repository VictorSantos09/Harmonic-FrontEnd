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
import { Product } from '../../../models/product';
import { ProductService } from '../../../services/product.service';
import { FormOptions } from '../form/options';
import { TableColumn, TableOptions } from './options';

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
  ],
  providers: [ProductService, MessageService, ConfirmationService],
})
export class TableComponent implements OnInit {
  @Input() options: TableOptions = new TableOptions('Gerenciar');
  @Input() columns: TableColumn[] = [
    {
      name: 'name',
      sortableColumn: true,
    },
    {
      name: 'image',
      sortableColumn: false,
      isImage: true,
      image: {
        url: 'https://primefaces.org/cdn/primeng/images/demo/avatar/ionibowcher.png',
        alt: 'product',
        height: 50,
        width: 50,
      },
    },
    {
      name: 'price',
      sortableColumn: true,
    },
    {
      name: 'category',
      sortableColumn: true,
    },
    {
      name: 'review',
      sortableColumn: true,
    },
    {
      name: 'status',
      sortableColumn: true,
    },
  ];

  @Input() formOptions?: FormOptions;

  items: Product[] = [];
  item!: Product;
  selectedItems!: Product[] | null;
  submitted: boolean = false;
  itemDialog: boolean = false;

  constructor(
    private productService: ProductService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit() {
    this.productService.getProducts().then((data) => (this.items = data));
  }

  openNew() {
    this.item = {};
    this.submitted = false;
    this.itemDialog = true;
  }

  deleteSelectedProducts() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected products?',
      header: 'Confirm',
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
  }

  editProduct(item: Product) {
    this.item = { ...item };
    this.itemDialog = true;
  }

  deleteProduct(product: Product) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + product.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.items = this.items.filter((val) => val.id !== product.id);
        this.item = {};
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Product Deleted',
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
