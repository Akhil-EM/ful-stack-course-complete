import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  title = 'My App New';
  data={name:"akhil",age:20};
  months=['jan','feb','mar','apr','jun','jul','aug','sep','oct','nov','dec'];
   isavilable=false;
   a=10;
   b=15;
  name=" "

  ///creating a function to show alert
  myClickFunction(a)
  {
    alert("alert showing ");
    console.log(a);
  }
}
