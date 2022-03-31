import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './Usuario';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  url: string = 'http://127.0.0.1:8000/api';
  constructor(private clienteHttp:HttpClient) { }
  
  AgregarUsuario(dataUsuario:Usuario):Observable<any>{
    return this.clienteHttp.post(this.url+"/usuario", dataUsuario);
  }
  ObtenerUsuarios(){
    return this.clienteHttp.get(this.url+"/usuarios");
  }
}
