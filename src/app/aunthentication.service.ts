import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AunthenticationService {

  constructor(private apiservice: ApiService) { }

 async SignUp(username:string, password: string): Promise<any> {
  return await this.apiservice.post('auth/signup', {username, password})
  }

  async LogIn(username: string, password: string): Promise<any> {
    const response = await this.apiservice.post('auth/login', {username, password})
    localStorage.setItem('token', response.token)
  }

  GetToken(): string {
    return localStorage.getItem('token')
  }
}
