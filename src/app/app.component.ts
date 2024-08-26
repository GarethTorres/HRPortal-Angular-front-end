import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    // title = 'HR Portal: HR Management';
    constructor(private router: Router) {
        router.events.subscribe(event => {
          console.log("Navigation Event:", event);
        });
      }
}
