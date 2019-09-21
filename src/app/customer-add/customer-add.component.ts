import { Component, OnInit } from '@angular/core';

import { Customer } from '../customer.model'
import { DataService } from '../data.service'

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {

  constructor(private service:DataService) { }

  customer:Customer = new Customer
  submitted:boolean = false

  salvar(){
    this.service.createCustomer(this.customer)
      .subscribe(data => console.log(data), error => console.log(error));
    this.submitted = true;
  }

  onSubmit(){
    this.salvar();
  }

  newCustomer(){
    this.submitted = false
  }

  ngOnInit() {
  }

}
