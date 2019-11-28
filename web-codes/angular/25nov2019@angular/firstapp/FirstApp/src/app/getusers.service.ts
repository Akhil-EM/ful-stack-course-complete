import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class GetusersService {

  constructor(public http:HttpClient) { }
  ///creating request function that retuns get 
  getUserServices()
  {
     return (this.http.get('https://jsonplaceholder.typicode.com/users'));
    
  }
}
