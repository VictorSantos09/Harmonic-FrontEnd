import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../../services';

export const RegisterGuard: CanActivateFn = (route, state) => {
  if (!inject(AuthService).isAuthenticated) {
    return true;
  } else {
    return false;
  }
};
