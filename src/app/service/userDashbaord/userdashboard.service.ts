import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserdashboardService {
  headers_object = new HttpHeaders().set("Authorization", localStorage.getItem("token"));
  constructor(private api:ApiService) { }

  getYourIdea(){
   return  this.api.get('userIdea',this.headers_object);
  }
  getCategory(){
    return this.api.get('category',this.headers_object);
  }
  AddNewIdea(idea:object){
     return this.api.post('idea',idea,this.headers_object);
  }
  updateIdea(id:String,body:object){
      return this.api.put(`idea/${id}`,body,this.headers_object);
  }
  delteIdea(id){
    return this.api.delete(`idea/${id}`,this.headers_object);
  }
}
