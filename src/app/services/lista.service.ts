import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Contactos } from '../models/contactos';


@Injectable()
  export class ListaService {

    contactList: AngularFireList<any>;
    selectedContactos: Contactos = new Contactos();

    constructor(private firebase: AngularFireDatabase) { }
  
    getContactos()
    {
      return this.contactList = this.firebase.list('contactos');
    }
  
    insertContactos(contactos: Contactos):any
    {
  this.contactList.push({
    nombre: contactos.nombre,
    apellidos: contactos.apaterno,
    cedula: contactos.num_documento,
    direccion: contactos.direccion,
    email: contactos.email,
    telefono: contactos.telefono
    
  });
}
 
updateContactos(contactos: Contactos)
{

  };
}




