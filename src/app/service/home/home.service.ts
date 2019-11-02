import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private apiService:ApiService) { }

  getAllIde(){
     return this.apiService.get('idea');
  }
}
