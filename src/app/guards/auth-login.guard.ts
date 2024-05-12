import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ROUTES_CNT } from '../../consts';
import { AuthService } from '../../services';

export const AuthLoginGuard: CanActivateFn = (route, state) => {
  if (state.url === ROUTES_CNT.LOGIN && inject(AuthService).isAuthenticated) {
    inject(Router).navigate([ROUTES_CNT.HOMEPAGE]);
    return false;
  }
  return true;
};
