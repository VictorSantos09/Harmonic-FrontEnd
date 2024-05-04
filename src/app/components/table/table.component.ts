import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
import {
  TableAddOptions,
  TableFieldColumnOption,
  TableFieldRowOption,
  TableOptions,
} from '../models/table';
import { FormField } from '../models/formField';
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
  ],
  providers: [ProductService, MessageService, ConfirmationService],
})
export class TableComponent  implements OnInit{
  @Input() AddOptions!: TableAddOptions;
  @Input() columns!: TableFieldColumnOption[];
  @Input() rows: number = 10;
  @Input() rowsData: TableFieldRowOption[] = [];
  @Input() options!: TableOptions;
  @Input() fields?: FormField[];

  @Output() onSave?: EventEmitter<any>;
  @Output() onDelete?: EventEmitter<any>;

  dialog: boolean = false;
  selectedItems!: any[] | null;
  submitted: boolean = false;

  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}
  ngOnInit(): void {
    console.log('omo');
    
  }

  products: Product[] = [
    {
      category: 'dawd',
      code: '465',
      description: '456',
      id: '1',
      image: '',
      inventoryStatus: 'cwd',
      price: 46,
      name: '465',
      quantity: 400,
      rating: 4,
    },
  ];

  openNew() {
    this.options.value = [];
    this.submitted = false;
    this.dialog = true;
  }

  deleteSelectedProducts() {
    this.confirmationService.confirm({
      message: 'Você tem certeza que deseja deletar os itens selecionados?',
      header: 'COnfirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        // o que fazer
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

  editProduct(value: any) {
    this.options.value = { ...value };
    this.dialog = true;
  }

  deleteProduct(value: any) {
    this.confirmationService.confirm({
      message: 'Você tem certeza que deseja deletar ?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.onDelete?.emit(value);
        this.options.value = [];
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
    this.dialog = false;
    this.submitted = false;
  }

  saveProduct() {
    this.submitted = true;
    this.onSave?.emit();
  }

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.options.value.length; i++) {
      if (this.options.value[i].id === id) {
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
