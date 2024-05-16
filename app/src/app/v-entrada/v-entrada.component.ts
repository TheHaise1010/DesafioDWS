import { Component, OnInit } from '@angular/core';
import { EntradaService } from '../servicios/entrada/entrada.service';
import { NavComponent } from '../nav/nav.component';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-v-entrada',
  imports:[NavComponent, CurrencyPipe],
  standalone: true,
  templateUrl: './v-entrada.component.html',
  styleUrls: ['./v-entrada.component.css']
})
export class VEntradaComponent implements OnInit {

  entradas: any[] = [];

  constructor(private entradaService: EntradaService) {}

  ngOnInit() {
    this.entradaService.getEntradas().subscribe(data => {
      this.entradas = data;
    });
  }

  isModalOpen = false;
  selectedImageUrl = '';

  openModal(factura: string) {
    console.log("Testing OpenModal")
    const selectedEntrada = this.entradas.find(entrada => entrada.factura === factura);
    if (selectedEntrada) {
      this.selectedImageUrl = selectedEntrada.factura;
      this.isModalOpen = true;
    }
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedImageUrl = '';
  }
}
