import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Estado } from './address/estado';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http : HttpClient) { }

  getAllStates() : Observable<Estado[]> {
    return this.http.get<Estado[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
  }
}
