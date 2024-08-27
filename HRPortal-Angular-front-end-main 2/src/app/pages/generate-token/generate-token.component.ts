import { Component, OnInit } from '@angular/core';
import { RegistrationServiceService } from 'src/app/services/registration-service.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-generate-token',
  templateUrl: './generate-token.component.html',
  styleUrls: ['./generate-token.component.scss']
})
export class GenerateTokenComponent implements OnInit {
  generateAndSend: boolean = false;
  errorMessage: string = '';
  name: string = '';
  email: string = '';
  hrName: string = '';
  tokens: any[] = [];
  displayedColumns: string[] = ['name', 'email', 'token', 'status'];

  constructor(private authService: AuthService, private registrationService: RegistrationServiceService) {
    this.hrName = this.authService.userValue.username;
  }

  ngOnInit(): void {
    this.getAllRegistrationTokens();
  }

  generateToken() {
    this.registrationService.generateToken(this.name, this.email).then(
      response => {
        const token = response.token;
        this.registrationService.sendRegistrationEmail(this.email, token, this.name, this.hrName).then(
          result => {
            this.generateAndSend = true;
          },
          error => {
            console.error('Error sending email:', error);
          }
        );
      }
    ).catch(
      error => {
        this.errorMessage = error;
      }
    );
  }
  
  getAllRegistrationTokens() {
    this.registrationService.getAllRegistrationTokens().then(
      response => {
        this.tokens = response; // Store tokens in the component property
      }
    ).catch(
      error => {
        console.error('Error getting all registration tokens:', error);
      }
    );
  }
}
