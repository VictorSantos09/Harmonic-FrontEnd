import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { AuthService } from '../../services';

export const RegisterGuard: CanActivateFn = (route, state) => {
  return lastValueFrom(inject(AuthService).isAuthenticated).then(x => {
    if (!x) {
      return true;
    } else {
      return false;
    }
  })
};
