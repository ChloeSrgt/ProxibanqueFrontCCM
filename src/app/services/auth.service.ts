import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
/*   private validCredentials = {
    username: 'admin',
    password: 'admin123'

  private roles:string[] = [];


  constructor() {
    this.roles = this.getRolesFromServer();
   }
  private getRolesFromServer(): string[] {
    return ['manager','advisor'];
  }

hasRole(role:string) : boolean{
  return this.roles.includes(role);
}


 /*  login(username: string, password: string): boolean {

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

