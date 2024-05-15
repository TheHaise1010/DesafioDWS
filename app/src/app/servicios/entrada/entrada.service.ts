import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntradaService {
  private apiUrl = 'https://663ea49ae1913c4767982df8.mockapi.io/Entradas';
  constructor(private http: HttpClient) { }

  postEntrada(concepto:String, fecha:Date, monto:Number):Observable<any>{
    return this.http.post<any>(this.apiUrl,{
      concepto:concepto,
      fecha:fecha,
      monto:monto
    })
  }
}
