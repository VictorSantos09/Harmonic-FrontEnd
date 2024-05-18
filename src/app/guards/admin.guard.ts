import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ROUTES_CNT } from '../../consts';
import { AdminService } from '../../services';

export const AdminGuard: CanActivateFn = (route, state) => {
  return inject(AdminService)
    .isAdmin()
    .pipe(
      map((isAdmin) => {
        if (isAdmin) {
          return true;
        } else {
          inject(Router).navigate([ROUTES_CNT.HOMEPAGE]);
          return false;
        }
      }),
      catchError((error) => {
        console.error('AdminGuard error:', error);
        inject(Router).navigate([ROUTES_CNT.HOMEPAGE]);
        return of(false);
      })
    );
};
