// 57. Separate all the Routing configuration code into another file app-routing.module in the angular.
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { RolesComponent } from './roles/roles.component';
import { CategoriesComponent } from './categories/categories.component';
import { UserComponent } from './user/user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from 'src/service/auth.guard';
import { DeactivateGuardService } from 'src/service/auth/deactivate-guard.service';

const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  // <!-- 54. Setting up the child or Nested Routes using the children key in routing module in the Angular. -->
  // provide router outlet on the parent component
  {
    path: 'user', component: UsersComponent,
    // 58. Introduction to Routing Guards. Implementation of canActivate Route Guard in the angular.
    // canActivate:[AuthGuard],
    canActivateChild:[AuthGuard],
    children: [{ path: ':id/:name', component: UserComponent },
    // 55. Preserve or merge the query parameters by forwarding with queryparamsHandling in Angular.
    // 60. Controlling Navigation with CanDeactivate Route Guard in the angular
    {path:':id/:name/edit', component:EditUserComponent, canDeactivate :[DeactivateGuardService]}]
  },
  // { path: 'user/:id/:name', component: UserComponent },



  { path: 'roles', component: RolesComponent },
  { path: 'categories', component: CategoriesComponent },
  // 56. Implement Custom 404 Page adding wildcard Route, redirectTo option in the angular routing module
  {path:'not-found', component:PageNotFoundComponent},
  {path:'**', redirectTo:'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
