import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../models/cliente';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};
@Injectable({
  providedIn: 'root'
})
export class ApiSailsService {
  apiAddres: string;
  error : string;
  constructor(public httpclient: HttpClient) {
    this.apiAddres = 'http://localhost:1337/tablacontacto/'
  }
  getCliente(): Observable<Array<Cliente>>{
    return this.httpclient.get<Array<Cliente>>(this.apiAddres)
  }

  borrarCliente( id ) {
    console.log(id);
    console.log(this.apiAddres+'destroy/'+id);
    return this.httpclient.get(this.apiAddres+'destroy/'+id);

  }

  insertClient ( cliente: Cliente ) {
    console.log(cliente);
    let params = new HttpParams().set('nombre', cliente.nombre);
    params = params.append('apaterno', cliente.apaterno);
    params = params.append('num_documento', cliente.num_documento);
    params = params.append('telefono', cliente.telefono);
    params = params.append('email', cliente.email);
    return this.httpclient.get("http://localhost:1337/tablacontacto/create",{ params: params})
          .subscribe (resp => {
            console.log('aqui');
          },
        error => {
          console.log ( 'error' );
          this.error = "error desded aca";
        });
  }

}
