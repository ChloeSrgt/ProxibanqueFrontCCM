import { inject } from "@angular/core";
import { CanActivateFn} from "@angular/router";
import { AuthService } from "../services/auth.service";


export const advisorGuard: CanActivateFn =(route, state) => {
    const service = inject(AuthService)


    return service.hasRole('advisor')
}