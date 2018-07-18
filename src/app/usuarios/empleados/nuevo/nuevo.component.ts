import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// model
import { Cliente } from '../../../models/cliente';
// service
import { ApiSailsService } from '../../../services/api-sails.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent {
  data:Observable<Array<Cliente>>;

  constructor(public sails:ApiSailsService) {}

  getCliente(): void {
    this.data =this.sails.getCliente();
  }

  borrarCliente(id) {
    console.log(id);
  }

  }
