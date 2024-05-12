import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { map } from 'rxjs';
import { AdminService } from '../../services';

export const AdminGuard: CanActivateFn = (route, state) => {
  let isAdmin = inject(AdminService)
    .isAdmin()
    .subscribe({
      next: (data) => {
        return data;
      },
    });
  if (
    inject(AdminService)
      .isAdmin()
      .pipe(
        map((isAdmin) => {
          if (isAdmin) {
            return true;
          } else {
            return false;
          }
        })
      )
  ) {
  }
  return false;
};
