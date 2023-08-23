import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
isLoggedIn=false
  constructor() { }
// 58. Introduction to Routing Guards. Implementation of canActivate Route Guard in the angular.
  logIn(){
    this.isLoggedIn=true
  }

  logOut(){
    this.isLoggedIn=false
  }


  isAuthenticated(){
    return this.isLoggedIn
  }
}
