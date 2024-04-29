import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { RadioModel } from '../../../models/RadioModel';
import { RadioService } from '../../../services/radio.service';

@Component({
  selector: 'app-table-radio',
  standalone: true,
  imports: [CommonModule, TableModule, ToastModule, FormsModule],
  templateUrl: './table-radio.component.html',
  styleUrl: './table-radio.component.scss',
  providers: [MessageService],
})
export class TableRadioComponent implements OnInit {
  radios!: RadioModel[];

  clonedRadios: { [s: string]: RadioModel } = {};

  constructor(
    private radioService: RadioService,
    private messageService: MessageService,
  ) {}

  ngOnInit(): void {
    // this.radioService.getDados().subscribe((data) => this.radios = data);
  }

  onRowEditInit(radio: RadioModel) {
    this.clonedRadios[radio.id as number] = { ...radio };
  }

  onRowEditSave(radio: RadioModel) {
    delete this.clonedRadios[radio.id as number];
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Product is updated',
    });
  }

  onRowEditCancel(radio: RadioModel, index: number) {
    this.radios[index] = this.clonedRadios[radio.id as number];
    delete this.clonedRadios[radio.id as number];
  }
}
