import { Component, OnInit } from '@angular/core';
import{ProductsService} from '../products.service';
import {Eproducts} from './Products.model';
@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  providers:[ProductsService],
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  flag:Boolean=false;
  btn_name:String;
  products_arry:Eproducts[];
 
  constructor( public pro:ProductsService) { }
  
 
  ngOnInit() {
    this.btn_name="Show Image";    
    this.pro.getProducts().subscribe((data)=>{
      console.log(data);
      this.products_arry=JSON.parse(JSON.stringify(data));
    })
    
  }
  change_value()
  {
    if(this.flag==false)
    {  
      this.btn_name="Hide Image"
       this.flag=true;
    }
    else{
      this.btn_name="Show Image"
      this.flag=false;
    }
  }
  
}
