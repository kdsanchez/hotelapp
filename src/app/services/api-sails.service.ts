import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../models/cliente';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

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

  insertClient ( form ) {
    console.log(form.value);
    return this.httpclient.post<Cliente>("http://localhost:1337/tablacontacto/create",form.value, httpOptions);
    }
  }

}
