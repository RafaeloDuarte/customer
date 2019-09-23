import { Component, OnInit, Output, EventEmitter, Injectable } from '@angular/core';
import { Customer } from '../customer.model';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})

@Injectable() 
export class CustomerListComponent implements OnInit {

  customers$: Observable<Customer[]>;
  searchCustomers: Observable<Object> = new Observable
  existe: boolean = false
  @Output() customerEmit = new EventEmitter<Customer>();

  constructor(private dataService: DataService) { }

  ngOnInit() {
    //return this.dataService.getCustomers().subscribe(data => this.customers$ = data);

    // return this.dataService.getCustomers()
    //         .subscribe((res : any[])=>{
    //           this.customers$ = res;
    //           console.log(res);
    //           });
    this.reloadData();
  }

  deleteUser(customer:Customer){
    console.log(customer.id)
    this.dataService.deleteCustomer(customer.id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
  
  getCustomerAge(age: number){
    this.searchCustomers = this.dataService.getCustomerByAge(age)
    this.existe = true
  }

  getCustomerName(name: string){
    this.searchCustomers = this.dataService.getCustomerByName(name)
    this.existe = true
  }

  updateUser(customer:Customer){
    this.customerEmit.emit(customer);
    console.log('Emitindo')
  }

  sairDaEdicao(){
    this.existe = false
  }

  reloadData() {
    this.customers$ = this.dataService.getCustomersList();
  }

}
