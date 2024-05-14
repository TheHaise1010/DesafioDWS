import { Component, OnInit } from '@angular/core';
import { LoginService } from '../servicios/login/login.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent implements OnInit{

  correo:string = ""
  password:string = ""
  private usuarios:any[] = []

  constructor(private loginService: LoginService, private router: Router) {
  }

  ngOnInit(): void {
    this.loginService.login().subscribe((data)=>{
      this.usuarios = data;
      console.log("Success");
      console.log(this.usuarios);
    })
  }


  registro():void{
    if(this.usuarios.find(usuario => usuario.correo === this.correo) && this.usuarios.find(usuario => usuario.contrasena === this.password)){
      console.log("Correo encontrado");
     }else{
      console.log("Correo no encontrado");
      this.loginService.postUsuario(this.correo, this.password).pipe(
        catchError((error) => {
          console.error('Error al hacer la solicitud POST:', error);
          return throwError('Ha ocurrido un error. Inténtalo de nuevo más tarde.');
        })
      ).subscribe(
        (data) => {
          console.log('Respuesta del servidor:', data);
          this.router.navigate(['/nav']);
        }
      );
      
     }
  }
}
