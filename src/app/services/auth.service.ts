import { Injectable } from '@angular/core';
import axios from 'axios';
import { ReplaySubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/api';
  private userSubject: ReplaySubject<any> = new ReplaySubject<any>(1);
  public user: Observable<any> = this.userSubject.asObservable();

  private currentUser: any = null;

  constructor() {
    this.initializeUser();
  }

  private async initializeUser() {
    try {
      const user = await this.validateToken();
      this.currentUser = user;
      this.userSubject.next(user);
    } catch (error) {
      console.error('Failed to initialize user', error);
      this.currentUser = null;
      this.userSubject.next(null);
    }
  }

  async login(username: string, password: string): Promise<void> {
    try {
      await axios.post(`${this.apiUrl}/login`, { username, password, role: 'HR' }, { withCredentials: true });
      const user = await this.validateToken();
      this.currentUser = user;
      this.userSubject.next(user);
    } catch (error: any) {
      console.error('Login failed', error.response ? error.response.data.message : error.message);
      throw error.response ? error.response.data.message : error.message;
    }
  }

  async logout(): Promise<void> {
    try {
      await axios.get(`${this.apiUrl}/logout`, { withCredentials: true });
      this.currentUser = null;
      this.userSubject.next(null);
    } catch (error) {
      console.error('Logout failed', error);
      throw error;
    }
  }

  public get userValue() {
    return this.currentUser;
  }

  public async validateToken(): Promise<any> {
    try {
      const response = await axios.get(`${this.apiUrl}/validate-token`, { withCredentials: true });
      if (response.status === 200) {
        return response.data;
      }
      throw new Error('Invalid token');
    } catch (error) {
      console.error('Token validation failed', error);
      return null;
    }
  }
}
