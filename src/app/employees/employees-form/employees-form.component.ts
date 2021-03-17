import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeesService } from '../../employees.service';
import { AddressService } from '../../address.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from '../address';
import { BankDetail } from '../bankDetail';
import { Estado } from 'src/app/address/estado';

@Component({
  selector: 'app-employees-form',
  templateUrl: './employees-form.component.html',
  styleUrls: ['./employees-form.component.css']
})
export class EmployeesFormComponent implements OnInit {

  employee: Employee;
  success : boolean = false;
  errors : String[];
  estados : Estado[];
  id: number;

  constructor( 
    private employeeService : EmployeesService,
    private addressService : AddressService,
    private router : Router,
    private activatedRoute : ActivatedRoute
  ) { 
     this.employee = new Employee();
     this.employee.address = new Address();
     this.employee.bankDetail = new BankDetail;
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

    this.addressService
            .getAllStates()
            .subscribe(response => {
              this.estados = response;              
            },        
                  errorResponse => console.log('Ocorreu um erro ao consultar os Estados')
            );    
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
