import { Component, OnInit } from '@angular/core';
import { HomeService } from '../service/home/home.service';
import { LoginService } from '../service/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  AllIdeas:any[]=[];
  constructor(private homeService:HomeService,private login:LoginService,private router:Router) { }

  ngOnInit() {
      this.homeService.getAllIde().subscribe((ideas)=>{
        console.log(ideas); 
          this.AllIdeas = ideas;
      })
  }
  info(){
      // alert("Pealse login First!!");
      this.router.navigate(['login']);

  }
}
