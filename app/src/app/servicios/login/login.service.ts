import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'https://663ea49ae1913c4767982df8.mockapi.io/Usuarios';

  constructor(private http: HttpClient) { }

  login():Observable<any>{
    return this.http.get<any>(this.apiUrl)
  }

  postUsuario(correo:String, password:String):Observable<any>{
    return this.http.post<any>(this.apiUrl,{
      correo:correo,
      contrasena:password
    })
  }


}