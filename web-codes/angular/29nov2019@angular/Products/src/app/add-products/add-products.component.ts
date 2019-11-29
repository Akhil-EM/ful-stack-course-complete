import { Component, OnInit } from '@angular/core';
import{Eproducts} from '../list-products/Products.model'
import{ProductsService} from '../products.service';
@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {
  productItem=new Eproducts(null,null,null,null,null,null,null,null);
  constructor(public serviceObj:ProductsService) { }
  
  ngOnInit() {
  }
  addproduct()
  {
    console.log(this.productItem)
    this.serviceObj.addproduct(this.productItem).
     subscribe((data)=>{
      if(data=="succes")
      {
       
        alert(data);
      }
     else
     {
       alert("something went wrong !!!");
     }
    })
   
    
  }
}
