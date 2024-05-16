import { Component } from '@angular/core';
import { SalidasService } from '../servicios/salidas/salidas.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-r-salida',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './r-salida.component.html',
  styleUrl: './r-salida.component.css'
})
export class RSalidaComponent {

  monto:string = ""
  fecha:Date = new Date()
  concepto:string = ""

  constructor(private router: Router, private salidasService:SalidasService){}

  postSalidas():void{
    try {
      this.salidasService.postSalidas(this.concepto, this.fecha, Number.parseFloat(this.monto)).subscribe(
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
