import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ServicesService } from './services.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  constructor(private myService : ServicesService, private router : Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const loggedIn = this.myService.loggedUser;
      const admin = this.myService.coach;
      // console.log(loggedIn);
      if (loggedIn == null) {
        alert('User Guard');
        this.router.navigateByUrl('/login')
        return false;
      }
        return true

  }
  
}
