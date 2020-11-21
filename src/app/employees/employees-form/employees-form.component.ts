import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeesService } from '../../employees.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employees-form',
  templateUrl: './employees-form.component.html',
  styleUrls: ['./employees-form.component.css']
})
export class EmployeesFormComponent implements OnInit {

  employee: Employee;
  success : boolean = false;
  errors : String[];
  id: number;

  constructor( 
    private employeeService : EmployeesService,
    private router : Router,
    private activatedRoute : ActivatedRoute
  ) { 
     this.employee = new Employee();
  }

  ngOnInit(): void {
    let params = this.activatedRoute.params;
    params.forEach( value =>{
      if(value.id){
        this.id = value.id;
        this.employeeService
          .getEmployeeById(this.id)
          .subscribe(
            response => this.employee = response,
            errorResponse => this.employee = new Employee()
          )
      }
    }); 
  }
  save() {
    console.log(this.employee);
  }

  onSubmit() {

    if (this.id) {
      this.employeeService
        .update(this.employee)
        .subscribe(response => {
          this.success = true;
          this.errors = null;
        }, errorResponse => {
          this.errors = ['The employee has not been updated. Please contact your I.T. Support.'];
        });
    } else {
      this.employeeService
        .save(this.employee)
        .subscribe( response => {          
            this.success = true;
            this.errors = null;
            this.employee = response;  
        }, errorResponse => {
          this.success = false;
          this.errors = errorResponse.error.errors;        
        });
    }
  }

  backToList() {
    this.router.navigate(['employees-list']);
  }

}
