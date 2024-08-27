import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  constructor(private router: Router) {}

  handleLogout() {
    localStorage.removeItem('token');
    console.log('User logged out');
    // TODO: add any additional logout logic
    this.router.navigate(['/login']);
  }
}
