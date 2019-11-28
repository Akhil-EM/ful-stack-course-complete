import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { TemplateComponentComponent } from './template-component/template-component.component';
import { ReactiveComponentComponent } from './reactive-component/reactive-component.component';
import {FormsModule} from '@angular/forms'
import {ReactiveFormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    AppHeaderComponent,
    HomeComponentComponent,
    TemplateComponentComponent,
    ReactiveComponentComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
