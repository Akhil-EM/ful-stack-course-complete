import { Component, OnInit, Inject } from '@angular/core';
import{LOCAL_STORAGE,WebStorageService} from 'angular-webstorage-service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
      model:any={};
  constructor(@Inject(LOCAL_STORAGE) private storage:WebStorageService,public router:Router) { }
    
  ngOnInit() {
         var key=this.storage.get('key')
         if(key==true)
         {
          this.router.navigate(["home"]);
         }
         else
         {
          this.router.navigate([" "]);
         }
  }
  webStorage()
  {
    
    if(this.model.uname=="admin"&&this.model.pass==12345)
    {
      this.storage.set('uname',this.model.uname);  
      this.storage.set('key',true);   
      alert('login success');
      this.router.navigate(["home"]);
    }
    else{
      alert("incorrect credentials")
    }
      
  }
}
