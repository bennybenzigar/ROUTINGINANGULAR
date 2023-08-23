

// 60. Controlling Navigation with CanDeactivate Route Guard in the angular
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

export interface IDeactivateGuard{
    canExit:()=>boolean|Promise<boolean>|Observable<boolean>
}
export class DeactivateGuardService implements CanDeactivate <IDeactivateGuard>
    {canDeactivate(component: IDeactivateGuard,route: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        
        return component.canExit()
    }


    
}