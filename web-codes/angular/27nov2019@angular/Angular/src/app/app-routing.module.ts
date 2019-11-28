import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ReactiveComponentComponent } from './reactive-component/reactive-component.component';
import { TemplateComponentComponent } from './template-component/template-component.component';

const routes: Routes = [{path:'',component:HomeComponentComponent},{path:'template',component:TemplateComponentComponent},{path:'react',component:ReactiveComponentComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
