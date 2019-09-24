import { Component, OnInit } from '@angular/core';
import { CustomerListComponent } from '../customer-list/customer-list.component';
import { Customer } from '../customer.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {

  customer:Customer = new Customer;

  constructor(private customerList: CustomerListComponent, private service:DataService) { }

  ngOnInit() {
    this.customerList.customerEmit.subscribe(
      customerEmitido => this.customer = customerEmitido
    )
  }

  sairDaEdicao(){
    this.customer = new Customer
  }

  onSubmit(){
    this.service.updateCustomer(this.customer._id,this.customer)
    this.sairDaEdicao()
  }
    
}