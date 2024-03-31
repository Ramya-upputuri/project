import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private _loginService:LoginService,private _router:Router){}
 
  public userform:FormGroup=new FormGroup(
    {
      email:new FormControl(),
      password:new FormControl(),
    }
  )
  submit(){
    console.log(this.userform.value)
    this._loginService.submitted(this.userform.value).subscribe(
      (data:any)=>{
        localStorage.setItem("my-token",data.token);
        alert("login successfully");
        this._router.navigateByUrl("/dashboard")
      },
      (err:any)=>{
        alert("Internal Server Error");
      }
    )
  }

}
