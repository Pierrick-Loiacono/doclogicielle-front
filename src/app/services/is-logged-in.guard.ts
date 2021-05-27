import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class IsLoggedInGuard implements CanActivate, CanLoad {

  constructor(private us: UserService) { }

  checkTokenExpiration() {
    return Object.keys(this.us.me()).length !== 0
  }
  /**
   * Guard for routes
   * @returns {Boolean} True if the user is still authenticated
   */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.checkTokenExpiration();
  }

  /**
   * Guard for modules
   * @returns {Boolean} True if the user is still authenticated
   */
  canLoad() {
    return this.checkTokenExpiration();
  }
}
