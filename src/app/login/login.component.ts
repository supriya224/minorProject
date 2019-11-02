import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Login } from './login';
import { LoginService } from '../service/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    newUser:Login={
      email:'',
      password:''
    }
  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit() {
  }
  loginUser(formData:NgForm){
      console.log(formData.value);
    this.loginService.logins(formData.value).subscribe((res)=>{
        console.log(res.token);
           this.loginService.setToken(res.token);
            this.router.navigate(['dashboard']);
    },(err)=>{
        alert(err.error.message);
    });      
  }
}
