import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalidasService {
  private apiUrl = 'https://663ea49ae1913c4767982df8.mockapi.io/Salidas';
  constructor(private http: HttpClient) { }

  postSalidas(concepto:String, fecha:Date, monto:Number):Observable<any>{
    return this.http.post<any>(this.apiUrl,{
      concepto:concepto,
      fecha:fecha,
      monto:monto
    })
  }

  getSalidas():Observable<any>{
    return this.http.get<any>(this.apiUrl)
  }
}
