import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Employee } from '../models/employee';

@Injectable()
export class EmployeeService {

  employeeList: AngularFireList<any>;
  selectedEmployee: Employee = new Employee();
  
  constructor(private firebase: AngularFireDatabase ) { }

  getEmpleados()  
  {
    return this.employeeList = this.firebase.list('employees');
    
    
  }

  insertEmployee(employee: Employee)
  {
    this.employeeList.push({
      nombre: employee.nombre,
      posicion: employee.posicion,
      oficina: employee.oficina,
      salario: employee.salario
    });
  }

  updateEmployee(employee: Employee)
  {
    this.employeeList.update(employee.$key, {
      nombre: employee.nombre,
      posicion: employee.posicion,
      oficina: employee.oficina,
      salario: employee.salario
    });
  }

  deleteEmployee($key: string)
  { 
    this.employeeList.remove($key);

  }

}

