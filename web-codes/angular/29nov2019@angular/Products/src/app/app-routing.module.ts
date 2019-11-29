import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{AddProductsComponent} from './add-products/add-products.component'
import{ListProductsComponent} from './list-products/list-products.component'
const routes: Routes = [{path:"",component:ListProductsComponent},{path:"addproduct",component:AddProductsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
