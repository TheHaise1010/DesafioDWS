import { Component } from '@angular/core';
import { EntradaService } from '../servicios/entrada/entrada.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-r-entrada',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './r-entrada.component.html',
  styleUrl: './r-entrada.component.css'
})
export class REntradaComponent {

  monto:string = ""
  fecha:Date = new Date()
  concepto:string = ""

  constructor(private router: Router, private entradaService:EntradaService){}

  postEntrada():void{
    try {
      this.entradaService.postEntrada(this.concepto, this.fecha, Number.parseFloat(this.monto)).subscribe(
        (data) => {
          console.log(data);
          Swal.fire(
            'Excelente',
            'Entrada agregada exitosamente ',
            'success'
          )
          this.concepto = ""
          this.monto = "0.00"
          this.fecha = new Date()
        }
      );
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Sucedio un problema al agregar la entrada'
      })
      console.log('Ocurrió un error al realizar la solicitud:', error);
    }
   }
}
