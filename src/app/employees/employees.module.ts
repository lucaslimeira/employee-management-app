import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesFormComponent } from './employees-form/employees-form.component';
import { FormsModule }  from '@angular/forms';
import { EmployeesListComponent } from './employees-list/employees-list.component';


@NgModule({
  declarations: [
    EmployeesFormComponent, 
    EmployeesListComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    FormsModule
  ], exports: [
     EmployeesFormComponent,
     EmployeesListComponent
  ]
  
})
export class EmployeesModule { }
