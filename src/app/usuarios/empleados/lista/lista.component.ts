import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../../../models/cliente';
import { ApiSailsService } from '../../../services/api-sails.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent{
  data:Observable <Array<Cliente>>;

  constructor(public sails:ApiSailsService) { }

  getingresarcliente(): void {
    this.data=this.sails.getCliente();
  }

}

