import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IDeactivateGuard } from 'src/service/auth/deactivate-guard.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
// 60. Controlling Navigation with CanDeactivate Route Guard in the angular
export class EditUserComponent implements OnInit, IDeactivateGuard {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  canExit() {
    if (confirm('Are you sure you want to exit')) {
      return true
    }
    else {
      return false
    }
  }
}