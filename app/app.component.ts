// i am testing git integration with jenkins

import { Component } from '@angular/core';
import { CustServiceService } from './cust-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'custeg';
  allCustomers : Customer[];
  statusCode : number;

  constructor(private cService :CustServiceService){

  }

  getAllCustomers(){
    this.cService.getAllCustomers().subscribe(
      data => this.allCustomers=data,
      errorCode => this.statusCode =errorCode
    );
  }
}


export class Customer{
  constructor(public id : number , public name :string , public addr :string)
  {

  }
}
