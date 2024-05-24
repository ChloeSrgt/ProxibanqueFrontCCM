import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  role$: Observable<string | null>;

  constructor(private authService: AuthService) {
    this.role$ = this.authService.currentRole$;
  }

  ngOnInit(): void {}
}
