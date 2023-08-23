import { Component } from '@angular/core';
import { AuthService } from 'src/service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

constructor(private authService:AuthService){

}
  title = 'leelewebdevrouting';

  login(){
    this.authService.isLoggedIn=true
  }
  logout(){
this.authService.isLoggedIn=false
  }
}
