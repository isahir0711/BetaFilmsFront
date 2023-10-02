import { CanActivateFn, Router } from '@angular/router';
import { SecurityService } from '../security.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {

  const authService = inject(SecurityService);
  const router = inject(Router);

  if(authService.isLogged()){
    return true;
  }

  return router.parseUrl("Accounts/LogIn");
};
