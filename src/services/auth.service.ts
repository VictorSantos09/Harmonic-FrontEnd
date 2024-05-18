import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { API_URL } from './API_URL';
import { AuthEventService } from './auth-event.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly COOKIE_NAME = '.AspNetCore.Identity.Application';

  @Output() onAuthChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  get isAuthenticated(): boolean {
    console.log(this._cookieService.getAll());
    if (this._cookieService.check(this.COOKIE_NAME)) {
      return this._cookieService.get(this.COOKIE_NAME) === 'true';
    }

    return false;

    // return localStorage.getItem(this.COOKIE_NAME) === 'true';
  }

  constructor(
    private _http: HttpClient,
    private _cookieService: CookieService,
    private _authEventService: AuthEventService
  ) {}

  public login(dto: LoginDTO) {
    return this._http
      .post<any>(`${API_URL.URL}login`, dto, {
        params: { useCookies: 'true' },
        withCredentials: true,
      })
      .subscribe({
        next: () => {
          this._setCookies(true);
          this._authEventService.emitIsAuthenticated(true);
          this.onAuthChanged.emit(true);
        },
        error: () => {
          this._setCookies(false);
          this._authEventService.emitIsAuthenticated(false);
          this.onAuthChanged.emit(false);
        },
      });
  }

  public logout() {
    this._setCookies(false);
    this._authEventService.emitIsAuthenticated(false);
    this.onAuthChanged.emit(false);
  }

  private _setCookies(isAuthenticated: boolean) {
    localStorage.setItem(this.COOKIE_NAME, isAuthenticated.toString());

    // if (this._cookieService.check(this.COOKIE_NAME)) {
    //   this._cookieService.delete(this.COOKIE_NAME);
    // } else {
    //   this._cookieService.set(this.COOKIE_NAME, isAuthenticated.toString(), {
    //     secure: true,
    //     sameSite: 'Strict',
    //   });
    // }
  }
}

export class LoginDTO {
  email!: string;
  password!: string;
  twoFactorCode?: string;
  twoFactorRecoveryCode?: string;
  useSessionCookie?: boolean;
}
