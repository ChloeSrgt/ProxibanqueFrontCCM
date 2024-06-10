import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

// login page with form to login and navigate to other pages
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: false,
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  logMe(username: HTMLInputElement, password: HTMLInputElement) {
    let role = this.authService.testUser(username.value, password.value);
    if (role === 'manager') {
      this.router.navigate(['advisors-list']);
    } else if (role === 'advisor') {
      this.router.navigate(['client-list']);
    } else {
      window.alert("You're not allowed to log in");
    }
  }
}
