import { Component } from '@angular/core';

@Component({
  selector: 'app-hiring-management',
  templateUrl: './hiring-management.component.html',
  styleUrls: ['./hiring-management.component.scss']
})
export class HiringManagementComponent {
  showTokenGenerator: boolean = true;

  toggleView() {
    this.showTokenGenerator = !this.showTokenGenerator;
  }
}
