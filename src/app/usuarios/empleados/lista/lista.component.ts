import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../../../models/cliente';
import { ApiSailsService } from '../../../services/api-sails.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent{
  data:Observable <Array<Cliente>>;
  //submitted = false;
  //let cliente = new Cliente();
  //onSubmit() { this.submitted = true; }

  constructor(public sails:ApiSailsService) { }

  registrar(form: NgForm) {
    //console.log(form.value);
    this.sails.insertClient(form.value);
  }

}
