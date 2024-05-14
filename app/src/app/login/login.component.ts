import { Component, OnInit } from '@angular/core';
import { LoginService } from '../servicios/login/login.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

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

  login():void{
   if(this.usuarios.find(usuario => usuario.correo === this.correo) && this.usuarios.find(usuario => usuario.contrasena === this.password)){
    console.log("Correo encontrado");
    this.router.navigate(['/nav']);
   }else{
    console.log("Correo no encontrado");
   }
  }
  
  registro():void{
    this.loginService.postUsuario(this.correo,this.password).subscribe(
      (data)=>{
        console.log(data)
      }
    )
  }

}
