import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/employees.service';
import { Employee } from '../employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employees: Employee[] = [];
  employeeToDelete : Employee;
  successMessage : String;
  errorMessage : String;

  constructor(
    private employeeService: EmployeesService, 
    private router : Router) { 

  }

  ngOnInit(): void {
    this.employeeService
    .getEmployees()
    .subscribe(response => this.employees = response);
  }

  newEmployee() {
    this.router.navigate(['/employees-form']);
  }

  onPrepareDeletion(employee : Employee) {
    this.employeeToDelete = employee;
  }

  deleteEmployee() {
    this.employeeService
      .deleteEmployee(this.employeeToDelete)
      .subscribe( response =>  { 
        this.successMessage = 'Employee has been deleted successfuly!';
        this.ngOnInit();
      },
      errorResponse => this.errorMessage = 'An error has ocurred while deleting the Employee');
  }

}
