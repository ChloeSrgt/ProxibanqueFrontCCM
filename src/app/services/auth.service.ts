import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
/*   private validCredentials = {
    username: 'admin',
    password: 'admin123'
  }; /

  constructor() { }

 /  login(username: string, password: string): boolean {
    return username === this.validCredentials.username && password === this.validCredentials.password;
  } */

  testUser(username:string,password:string){
    if (username =='manager' && password =='manager') {
    return 'manager'
  } else {
    if (username == 'advisor' && password == 'advisor'){
      return 'advisor'
    }
  } return 'NotAllowed'

  }

  }