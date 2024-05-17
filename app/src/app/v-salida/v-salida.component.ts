import { Component, OnInit } from '@angular/core';
import { SalidasService } from '../servicios/salidas/salidas.service';
import { NavComponent } from '../nav/nav.component';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-v-salida',
  imports:[NavComponent, CurrencyPipe],
  standalone: true,
  templateUrl: './v-salida.component.html',
  styleUrls: ['./v-salida.component.css']
})
export class VSalidaComponent implements OnInit {

  salidas: any[] = [];

  constructor(private salidasService: SalidasService) {}

  ngOnInit() {
    this.salidasService.getSalidas().subscribe(data => {
      this.salidas = data;
    });
  }

  isModalOpen = false;
  selectedImageUrl = '';

  openModal(factura: string) {
    console.log("Testing OpenModal")
    const selectedSalida = this.salidas.find(salida => salida.factura === factura);
    if (selectedSalida) {
      this.selectedImageUrl = selectedSalida.factura;
      this.isModalOpen = true;
    }
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedImageUrl = '';
  }
}
