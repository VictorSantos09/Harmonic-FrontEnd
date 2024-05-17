import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ROUTES_CNT } from '../../consts';
import { AuthService } from '../../services';

export const AuthGuard: CanActivateFn = (route, state) => {
  if (inject(AuthService).isAuthenticated) {
    return true;
  } else {
    inject(Router).navigate([ROUTES_CNT.LOGIN]);
    return false;
  }
};
