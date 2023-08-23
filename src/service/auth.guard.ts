import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { Injectable } from "@angular/core";
// 58. Introduction to Routing Guards. Implementation of canActivate Route Guard in the angular.

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild{
 
  constructor(private authService:AuthService,private router:Router){}

  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):boolean |Promise<boolean>| Observable <boolean>{
  
    let isloggedIn= this.authService.isAuthenticated()


    if(isloggedIn){
      return true
    }
    else{
      this.router.navigate(['/'])

      return false
    }

  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise <boolean> {
    return this.canActivate(route,state)
  }
  

}