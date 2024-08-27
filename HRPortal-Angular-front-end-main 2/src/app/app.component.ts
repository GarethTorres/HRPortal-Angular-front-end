import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'HR Portal: HR Management';
  isAuthenticated: boolean = false;
  constructor(private router: Router, private authService: AuthService) {
    router.events.subscribe(event => {
      console.log("Navigation Event:", event);
    });
  }

  ngOnInit() {
    this.authService.user.pipe(
      map(user => !!user)
    ).subscribe(authenticated => {
      this.isAuthenticated = authenticated;
    });
  }
}
