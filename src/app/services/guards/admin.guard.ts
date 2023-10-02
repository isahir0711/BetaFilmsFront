import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SecurityService } from '../security.service';

export const adminGuard: CanActivateFn = (route, state) => {
  
  const securityService = inject(SecurityService);
  const router = inject(Router);

  if(securityService.getRole() == 'admin'){
    return true;
  }
  
  return router.parseUrl("Accounts/LogIn");
};
