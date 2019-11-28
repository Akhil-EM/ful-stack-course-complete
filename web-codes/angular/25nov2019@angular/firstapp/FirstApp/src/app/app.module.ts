import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

////importing to use ngmodule
import { FormsModule } from '@angular/forms';
import { HomeComponentComponent } from './home-component/home-component.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FootherComponentComponent } from './foother-component/foother-component.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { UsersComponent } from './users/users.component';
import { PhoneComponent } from './about-us/phone/phone.component';
import{HttpClientModule}from '@angular/common/http';
import { ErrorComponent } from './error/error.component';
import { StudentComponentComponent } from './student-component/student-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    HeaderComponentComponent,
    FootherComponentComponent,
    AboutUsComponent,
    ContactUsComponent,
    UsersComponent,
    PhoneComponent,
    ErrorComponent,
    StudentComponentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
