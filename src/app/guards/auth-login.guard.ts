import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs';
import { ROUTES_CNT } from '../../consts';
import { AuthService } from '../../services';

export const AuthLoginGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.isAuthenticated.pipe(
    map((isAuthenticated) => {
      if (isAuthenticated) {
        return router.createUrlTree([ROUTES_CNT.HOMEPAGE]);
      } else {
        return true;
      }
    })
  );
};
