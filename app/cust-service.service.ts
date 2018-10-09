import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Http} from '@angular/http';
import { Customer } from './app.component';
@Injectable({
  providedIn: 'root'
})
export class CustServiceService {

  allCustomersUrl = "http://localhost:8084/listcust";
  constructor(private http:Http) { }

  getAllCustomers() : Observable<Customer[]>{
    this.http.get(this.allCustomersUrl)
    .map(this.extractData)
    .catch(this.handleError);
      return
   
  }

  private extractData(res :Response){
    let body = res.json;
    return body;
  }

  private handleError(error : Response | any){
    console.log ('error occurred ' +error);
  }
}
