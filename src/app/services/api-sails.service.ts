import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../models/cliente';
import { Observable } from 'rxjs';

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
  
}
