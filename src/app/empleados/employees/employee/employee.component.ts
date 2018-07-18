import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

// services
import { EmployeeService } from '../../../services/employee.service';
import { Employee } from '../../../models/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService ) { }

  ngOnInit() {
    this.employeeService.getEmpleados();
    this.resetForm();
 
    }

onSubmit(employeeForm: NgForm)
{
  if (employeeForm.value.$key == null)
    this.employeeService.insertEmployee(employeeForm.value)

    else
  this.employeeService.updateEmployee(employeeForm.value);

  this.resetForm(employeeForm);
}

resetForm(employeeForm?: NgForm)
{
  if(employeeForm != null)
  employeeForm.reset();
  this.employeeService.selectedEmployee = new Employee();
}

  }
  

  