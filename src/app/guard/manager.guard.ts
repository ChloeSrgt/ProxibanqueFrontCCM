import { inject } from "@angular/core"
import { CanActivateFn } from "@angular/router"
import { AuthService } from "../services/auth.service"

export const managerGuard: CanActivateFn =() => {
    const service = inject(AuthService)
    return service.hasRole('manager')
}