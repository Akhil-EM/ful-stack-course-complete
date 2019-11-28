import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-component',
  templateUrl: './reactive-component.component.html',
  styleUrls: ['./reactive-component.component.css']
})
export class ReactiveComponentComponent implements OnInit {
   registerForm:FormGroup;
   submitted=false;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.registerForm=this.formBuilder.group({
          firstName:['',Validators.required]
          // lastName:['',Validators.required],
          // email:['',[Validators.required,Validators.email]],
          // password:['',[Validators.required,Validators.minLength(6)]]
    });
  }
  get f(){return this.registerForm.controls}; ///calling a function in class with registerForm as parameters
  onSubmit()
  {
    this.submitted=true;
    ///setting true;

    console.log(this);
    if(this.registerForm.invalid)
    {
      return;
    }
    alert('Succes' +this.registerForm.get("firstName").value);
  }



}
