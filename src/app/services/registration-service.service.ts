import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { from, Observable } from 'rxjs';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class RegistrationServiceService {
  private apiUrl = 'http://localhost:5000/api';

  constructor(private http: HttpClient) { }

  async generateToken(name: string, email: string): Promise<any> {
    try {
      const response = await axios.post(`${this.apiUrl}/generate-token`, { name, email}, {withCredentials: true});
      if (response.status === 200) {
        return response.data;
      }
      throw new Error('Token generation failed');
    } catch (error: any) {
      throw error.response.data.message;
    }
  }

  sendRegistrationEmail(email: string, token: string, to_name: string, from_name: string): Promise<EmailJSResponseStatus> {
    const templateParams = {
      email,
      message: `http://localhost:3000/register/${token}`,
      to_name,
      from_name,
    };

    return emailjs.send(
      'service_bobwen',
      'template_lpql8mm',
      templateParams,
      '93lYNO3FBjDrFPVb8'
    );
  }

  async getAllRegistrationTokens(): Promise<any> {
    try {
      const response = await axios.get(`${this.apiUrl}/get-all-registration-tokens`, {withCredentials: true});
      if (response.status === 200) {
        return response.data;
      }
      throw new Error('Get all registration tokens failed');
    } catch (error) {
      console.error('Get all registration tokens failed', error);
      return null;
    }
  }
}

