import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { NgForm } from '@angular/forms';
import { RegisterService } from '../service/register/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    user:User={
        email:'',
        name:'',
        password:'',
        phone:null
    }
  constructor(private register:RegisterService) { }

  ngOnInit() {
  }

  saveUser(formData:NgForm){
      console.log(formData.value);
        this.register.registers(formData.value).subscribe((res)=>{
          alert(res.message+" "+"please login For continue");
          
        },(err)=>{
          alert(err.error.message);
        })
       
  }
}
