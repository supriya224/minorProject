import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private api:ApiService) { }

  registers(body:object){
     return this.api.post('register',body);
  }
}
