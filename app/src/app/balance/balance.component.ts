import { Component, OnInit } from '@angular/core';
import { SalidasService } from '../servicios/salidas/salidas.service';
import { NavComponent } from '../nav/nav.component';
import { EntradaService } from '../servicios/entrada/entrada.service';
import { CurrencyPipe } from '@angular/common';
import { VEntradaComponent } from '../v-entrada/v-entrada.component';
import { VSalidaComponent } from '../v-salida/v-salida.component';

@Component({
  selector: 'app-balance',
  standalone: true,
  imports: [NavComponent, CurrencyPipe, VEntradaComponent,VSalidaComponent],
  templateUrl: './balance.component.html',
  styleUrl: './balance.component.css'
})
export class BalanceComponent implements OnInit {

  salidas: any[] = [];
  entradas: any[] = [];
  totalSalidas:number = 0;
  totalEntradas:number = 0;
  balance:Number = 0;

  constructor(private salidasService: SalidasService, private entradaService: EntradaService) {}

  ngOnInit() {
    this.salidasService.getSalidas().subscribe(data => {
      this.salidas = data;
    });

    this.entradaService.getEntradas().subscribe(data => {
      this.entradas = data;
    });
    this.getBalance();
  }

  getBalance():void{
    for(let i = 0;i<this.entradas.length;i++){
      this.totalEntradas = this.totalEntradas + this.entradas[i].monto;
    }
    for(let i = 0;i<this.salidas.length;i++){
      this.totalSalidas = this.totalSalidas + this.salidas[i].monto;
    }
    this.balance = this.totalEntradas - this.totalSalidas;
  }
}
