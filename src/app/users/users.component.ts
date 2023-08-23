import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {

  }
  ngOnInit(): void {

  }
  onCategoriesClick() {
    // having two methors navigateByurl and navigate

    // this.router.navigateByUrl('/categories')
    this.router.navigate(['/categories'])

  }


 

}
