import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesFormComponent  } from './employees-form/employees-form.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';


const routes: Routes = [
  { path : 'employees-form', component : EmployeesFormComponent },
  { path : 'employees-form/:id', component : EmployeesFormComponent },
  { path : 'employees-list', component : EmployeesListComponent }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
