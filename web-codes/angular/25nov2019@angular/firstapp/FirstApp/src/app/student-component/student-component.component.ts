import { Component, OnInit } from '@angular/core';
import{GetusersService}from '../getusers.service'
@Component({
  selector: 'app-student-component',
  templateUrl: './student-component.component.html',
  styleUrls: ['./student-component.component.css']
})
export class StudentComponentComponent implements OnInit {

  constructor(public service:GetusersService) { }
   ////ngOnInit fn called on loading 
   userdata;
  ngOnInit() {
      this.service.getUserServices().
      subscribe((data)=>{
     
        this.userdata=data;
        console.log (this.userdata);
  })
  }

}
