import { Component, OnInit } from '@angular/core';
//import {HttpClient} from '@angular/common/http'; 
import{GetusersService} from '../getusers.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
/////creating a object as puGetusersServiceblic
  //constructor(public http:GetusersServiceHttpClient) { }
GetusersService
  ///calling ouside functionGetusersService
  constructor(public service:GetusersService) {}
  ngOnInit() {
  }
  userdata;

  /////calling get 
  getUsers()
  {
      
    ///calling get request using http
    /////this.http.get('https://jsonplaceholder.typicode.com/users').

    ////calling a outside function to get service 
    this.service.getUserServices().
     subscribe((data)=>{
     
          this.userdata=data;
          console.log (this.userdata);
    })
    
  }

}
