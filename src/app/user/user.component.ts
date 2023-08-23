import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user!: { id: string; name: string; };
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {

  }
  ngOnInit(): void {
    // 50. Passing and Fetching Parameters to Routes using ActivatedRoute snapshot in Angular.
    // cannot detect change automatically ,it will gets value on page load after that no changes will happen on ts file only params changes
    this.user = {
      id: this.activatedRoute.snapshot.params['id'],
      name: this.activatedRoute.snapshot.params['name']
    }
    // 53 fragment and query params from snapshot

    console.log(this.activatedRoute.snapshot.queryParams, 'snapquery')
    console.log(this.activatedRoute.snapshot.fragment, 'snapfragment')
    // console.log(this.user, 'user')



    // 51. Fetch Route Parameters Reactively using Params Subscribe with ActivatedRoute in angular.
    this.activatedRoute.params.subscribe((data: Params) => {
      console.log(data, 'data')
      this.user = { id: data['id'], name: data['name'] }
      console.log(data, 'user')
    })

    this.getqueryparams()
  }

  // 52 passing query params through button click

  getAlexDetails() {
    this.router.navigate(['/user/5/ameen'], {
      queryParams: { id: 123, search: 'ameensearch' },
      fragment: 'userfragment'
    })
  }


  // 53 subscribing query params params and frament


  getqueryparams() {
    this.activatedRoute.params.subscribe((res: Params) => {
      console.log(res, 'params')
    })

    this.activatedRoute.queryParams.subscribe((res: any) => {
      console.log(res, 'query')
    })


    this.activatedRoute.fragment.subscribe((res: any) => {
      console.log('fragment', res)
    })
  }

  // 55. Preserve or merge the query parameters by forwarding with queryparamsHandling in Angular.
  onEditclick(){
// to pass query params to edit component url use queryparamshandler-preserve
// queryparams handler-merge to merge query params
    this.router.navigate(['user',this.user.id,this.user.name,'edit'],{queryParamsHandling:'preserve'})
  }
} 
