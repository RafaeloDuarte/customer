import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ObjectUnsubscribedError } from 'rxjs'

import { User } from './user.model';
import { Customer } from './customer.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // //apiUrl = 'https://jsonplaceholder.typicode.com/users';
  // apiUrlCustomer = '/api/customer';
  
  private baseUrl:string = 'http://localhost:8080/api/customers'
  constructor(private http: HttpClient) {}

  getCustomers():Observable<any>{
    return this.http.get<Customer[]>(this.baseUrl);
  }

  //   getUsers(){
  //      // return this._http.get<User[]>(this.apiUrl);
  //   }

  createCustomer(customer:Customer): Observable<any>{
    return this.http.post(`${this.baseUrl}` + `/create`, customer)
  }

  // deleteCustomer(customer:Customer): Observable<any>{
  //   return this.http.post(`${this.baseUrl}` + `/`, customer.id)
  // }

  deleteCustomer(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getCustomersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  updateCustomer(id: number, value: any): Observable<any>{
    return this.http.put(`${this.baseUrl}/${id}`,value)
  }

  getCustomer(id: number): Observable<Object>{
    return this.http.get(`${this.baseUrl}/${id}`) 
  }

}
