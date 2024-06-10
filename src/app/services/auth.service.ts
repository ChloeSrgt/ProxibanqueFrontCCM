import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// Auth service to handle user authentication and roles management 
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private roles: string[] = [];
  private currentRoleSubject = new BehaviorSubject<string | null>(null);
  public currentRole$ = this.currentRoleSubject.asObservable();

  constructor() {
    this.roles = this.getRolesFromServer();
  }

  private getRolesFromServer(): string[] {
    return ['manager', 'advisor'];
  }

  hasRole(role: string): boolean {
    return this.roles.includes(role);
  }

  testUser(username: string, password: string): string {
    let role: string = 'NotAllowed';
    if (username === 'manager' && password === 'manager') {
      role = 'manager';
    } else if (username === 'advisor' && password === 'advisor') {
      role = 'advisor';
    }

    if (role !== 'NotAllowed') {
      this.currentRoleSubject.next(role);
    }

    return role;
  }

  logout() {
    this.currentRoleSubject.next(null);
  }
}
