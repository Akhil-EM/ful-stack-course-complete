import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { UsersComponent } from './users/users.component';
import { PhoneComponent } from './about-us/phone/phone.component';
import{ErrorComponent} from './error/error.component'
import{StudentComponentComponent}from './student-component/student-component.component';
const routes: Routes = [{path:'',component:HomeComponentComponent},
{path:'aboutus',component:AboutUsComponent,children:[
  {path:'phone',component:PhoneComponent}]},
{path:'contactus',component:ContactUsComponent},
{path:'users',component:UsersComponent},
{path:'student',component:StudentComponentComponent},
{path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
