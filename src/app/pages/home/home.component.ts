import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  user: any;

  constructor(private authService: AuthService, private router: Router) {
    this.user = this.authService.userValue;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
