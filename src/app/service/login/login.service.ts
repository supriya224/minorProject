import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private api:ApiService,private router:Router) { }

  logins(body:object){
      return this.api.post('login',body);
  }
  setToken(mytoken:string){
      localStorage.setItem("token",mytoken);
  }
  getToken(){
     return localStorage.getItem("token");
  }
  isLoggedIn() {
    return this.getToken() !== null;
  }
  logout() {
    localStorage.removeItem("token");
    this.router.navigate(["home"]);
  }
}
