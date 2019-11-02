import { Component, OnInit } from '@angular/core';
import { UserdashboardService } from '../service/userDashbaord/userdashboard.service';
import { LoginService } from '../service/login/login.service';
import { Idea } from './Idea';
import { Category } from './category';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.scss']
})
export class UserdashboardComponent implements OnInit {
  yourIdeas:any[] = [];
    addIdea:Idea = {
        title:'',
        subject:'',
        description:'',
        categoryId:'',
    }
    categories:Category[] = [];
    update=false;
    add  =false;

  constructor(private userdashboardService:UserdashboardService,private login:LoginService) { }

  ngOnInit() {
    this.userdashboardService.getYourIdea().subscribe((yourIdea)=>{
        this.yourIdeas = yourIdea;
        console.log(yourIdea);
        
    });
    this.userdashboardService.getCategory().subscribe((category:any[])=>{
        this.categories = category;
        console.log(category);
        
    })
  
  }
  createIdea(){
    this.add = true?true:false;
  }

  saveUser(ideaData:NgForm){
 
    console.log(ideaData.value);
    this.userdashboardService.AddNewIdea(ideaData.value).subscribe((res)=>{
         console.log(res);
         this.yourIdeas.push(res);
    },(err)=>{
        alert(err.error);
    })       
}
editIdea(idea:any){
  this.update = true;
    console.log(idea);
       this.addIdea.title=idea.title;
       this.addIdea.subject = idea.subject;
       this.addIdea.description = idea.description;
       this.addIdea.categoryId = idea.categoryId._id;
       this.addIdea.id = idea._id;
       
    
}
EditIdea(forData){
  console.log(this.addIdea.id);
  
 this.userdashboardService.updateIdea(this.addIdea.id,forData.value).subscribe((res)=>{
    console.log(res);
    forData.reset();
 }) 
}
deleteIdea(data){
  console.log(data);
  this.userdashboardService.delteIdea(data._id).subscribe((res)=>{
      console.log(res);
      
  })
  
}
}
