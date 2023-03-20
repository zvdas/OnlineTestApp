import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private as: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  // ): Observable<boolean> | Promise<boolean> | boolean {
    // console.log(!this.as.isLoggedIn());
    // if(!this.as.isLoggedIn()) {
    const currentUser = JSON.parse(localStorage.getItem('user')!)['providerData'];
    if(!currentUser) {
      // window.alert('Access Denied. Login to access this page.');
      // this.router.navigateByUrl('/auth/login')
      this.router.navigate(['/error', {errorCode: 401, errorTitle: 'Access Denied', errorDescription: 'Access Denied. Login to access this page.'}]);
    }
    return true;
  }
  
}
