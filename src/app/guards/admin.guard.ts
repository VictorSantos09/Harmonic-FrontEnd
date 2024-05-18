import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ROUTES_CNT } from '../../consts';
import { AdminService } from '../../services';

export const AdminGuard: CanActivateFn = (route, state) => {
  const adminService = inject(AdminService);
  const router = inject(Router);

  return adminService.isAdmin().pipe(
    map((isAdmin) => {
      if (isAdmin) {
        return true;
      } else {
        router.navigate([ROUTES_CNT.HOMEPAGE]);
        return false;
      }
    }),
    catchError((error) => {
      console.error('AdminGuard error:', error);
      router.navigate([ROUTES_CNT.HOMEPAGE]);
      return of(false);
    })
  );
};
