import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { RadioService } from '../../../services/radio.service';
import { RadioModel } from '../models';

@Component({
  selector: 'app-table-radio',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    ToastModule,
    FormsModule,
    ToolbarModule,
    ButtonModule,
    DialogModule,
    ConfirmDialogModule,
    InputTextModule,
  ],
  templateUrl: './table-radio.component.html',
  styleUrl: './table-radio.component.scss',
  providers: [MessageService, ConfirmationService],
})
export class TableRadioComponent implements OnInit {
  radioDialog: boolean = false;
  radios!: RadioModel[];
  radio!: RadioModel;
  selectedRadios!: RadioModel[] | null;
  submitted: boolean = false;
  Delete: any;

  constructor(
    private radioService: RadioService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit() {
    this.radioService.getDados().subscribe((data) => {
      this.radios = data.filter((item) => item.tipoConteudo?.nome === 'Radio');
    });
  }

  openNew() {
    this.radio = {};
    this.submitted = false;
    this.radioDialog = true;
  }

  deleteSelectedProducts() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected products?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.radios = this.radios.filter(
          (val) => !this.selectedRadios?.includes(val)
        );
        this.selectedRadios = null;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Products Deleted',
          life: 3000,
        });
      },
    });
  }

  editProduct(radio: RadioModel) {
    this.radio = { ...radio };
    this.radioDialog = true;
  }

  deleteProduct(radio: RadioModel) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + radio.titulo + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.radios = this.radios.filter((val) => val.id !== radio.id);
        this.radio = {};
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
    this.radioDialog = false;
    this.submitted = false;
  }

  saveProduct() {
    this.submitted = true;

    if (this.radio.titulo?.trim()) {
      if (this.radio.id) {
        this.radios[this.findIndexById(this.radio.id)] = this.radio;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Product Updated',
          life: 3000,
        });
      } else {
        this.radio.id = this.createId();
        this.radio.titulo = 'titulo';
        this.radios.push(this.radio);
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Product Created',
          life: 3000,
        });
      }

      this.radios = [...this.radios];
      this.radioDialog = false;
      this.radio = {};
    }
  }

  findIndexById(id: number): number {
    let index = -1;
    for (let i = 0; i < this.radios.length; i++) {
      if (this.radios[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  }

  createId(): number {
    let id = 0;
    var chars = '0123456789';
    for (var i = 0; i < 5; i++) {
      id += Number(chars.charAt(Math.floor(Math.random() * chars.length)));
    }
    return id;
  }

  getEventValue($event:any) :string {
    return $event.target.value;
  } 
}
