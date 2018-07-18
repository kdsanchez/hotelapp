import { Component, OnInit } from '@angular/core';

// services
import { EmployeeService } from '../../../services/employee.service';


import { Employee } from '../../../models/employee';
import { element } from 'protractor';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employeeList: Employee[];

  constructor(
    private employeeService : EmployeeService
  ) { }

  ngOnInit() {
    this.employeeService.getEmpleados()
    .snapshotChanges()
    .subscribe(item =>{
      this.employeeList = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.employeeList.push(x as Employee);
      });
    });

    }

    onEdit(employee: Employee){
      this.employeeService.selectedEmployee = Object.assign({}, employee);
    }

    onDelete($key:string){
      this.employeeService.deleteEmployee($key);

    }

  }



  