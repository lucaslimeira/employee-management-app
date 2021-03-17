import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employees/employee';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor( private http : HttpClient ) { 
   
  }

  save( employee : Employee) : Observable<Employee> {
      return this.http.post<Employee>('http://localhost:8080/api/employee/save', employee);
  }

  update(employee : Employee) : Observable<Employee> {
    return this.http.post<Employee>('http://localhost:8080/api/employee/save', employee);
  }

  getEmployees() : Observable<Employee[]> {
    return this.http.get<Employee[]>('http://localhost:8080/api/employee/findAll');
  }

  getEmployeeById(id: number) : Observable<Employee> {
    return this.http.get<any>(`http://localhost:8080/api/employee/findById/${id}`);
  }

  deleteEmployee(employee : Employee) : Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/api/employee/deleteById/${employee.id}`)
  }
}
