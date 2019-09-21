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
  searchCustomer: any = new Customer;
  @Output() customerEmit = new EventEmitter<Customer>();

  constructor(private dataService: DataService) { 
    console.log('CustomerListComponent')
  }

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

  updateUser(customer:Customer){
    this.customerEmit.emit(customer);
    console.log('Emitindo')
  }

  getCustomerId(customerId: number){
    this.searchCustomer = this.dataService.getCustomer(customerId)
    console.log(`Pesquisar cliente por id ${this.searchCustomer.name}`)
  }

  reloadData() {
    this.customers$ = this.dataService.getCustomersList();
  }

}
