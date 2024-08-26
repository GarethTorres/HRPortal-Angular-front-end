import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    return this.authService.user.pipe(
      map(user => {
        // Allow access to the login page if the user is not authenticated
        if (!user && state.url === '/login') {
          return true;
        }
        // Redirect authenticated users away from login page
        if (user && state.url === '/login') {
            
          return this.router.createUrlTree(['/home']);
        }
        // Protect other routes
        if (user || state.url === '/login') {
          return true;
        } else {
          return this.router.createUrlTree(['/login'], { queryParams: { returnUrl: state.url } });
        }
      })
    );
      
  }
}
