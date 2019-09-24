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

  deleteCustomer(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getCustomersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  
  getCustomer(id: string): Observable<any>{
    return this.http.get(`${this.baseUrl}/search/${id}`) 
  }

  getCustomerByAge(age: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/age/${age}`) 
  }

  getCustomerByName(name: string): Observable<any>{
    return this.http.get(`${this.baseUrl}/name/${name}`) 
  }

  updateCustomer(_id: string, value: any): Observable<any>{
    return this.http.put(`${this.baseUrl}/${Number(_id)}`,value)
  }

}
