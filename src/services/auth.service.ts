import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { API_URL } from './API_URL';
import { AdminService } from './admin.service';
import { AuthEventService } from './auth-event.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  @Output() onAuthChanged: EventEmitter<AuthState> =
    new EventEmitter<AuthState>();

  get isAuthenticated(): Observable<boolean> {
    return this._http
      .get<boolean>(`${API_URL.URL}auth`, {
        withCredentials: true,
      })
      .pipe(
        map(() => true),
        catchError(() => of(false))
      );
  }

  constructor(
    private _http: HttpClient,
    private _authEventService: AuthEventService,
    private _adminService: AdminService
  ) {}

  public register(dto: RegisterDTO) {
    return this._http.post<any>(`${API_URL.URL}register`, dto, {
      withCredentials: true,
    });
  }

  public login(dto: LoginDTO) {
    return this._http
      .post<any>(`${API_URL.URL}login`, dto, {
        params: { useCookies: 'true' },
        withCredentials: true,
      })
      .subscribe({
        next: () => {
          const sub = this._adminService.isAdmin().subscribe({
            next: (isAdmin) => {
              this._authEventService.emitIsAuthenticated({
                isAdmin: isAdmin,
                isAuthenticated: true,
                isEmail: dto.email,
              });

              this.onAuthChanged.emit({
                isAuthenticated: true,
                isAdmin: isAdmin,
                isEmail: dto.email,
              });

              sub.unsubscribe();
            },
          });
        },
        error: () => {
          this._authEventService.emitIsAuthenticated({
            isAdmin: false,
            isAuthenticated: false,
            isEmail: "",
          });
          this.onAuthChanged.emit({
            isAdmin: false,
            isAuthenticated: false,
            isEmail: "",
          });
        },
      });
  }

  public logout() {
    const sub = this._http
      .post(
        `${API_URL.URL}Auth/logout`,
        {},
        {
          withCredentials: true,
        }
      )
      .subscribe({
        next: () => {
          this._authEventService.emitIsAuthenticated({
            isAdmin: false,
            isAuthenticated: false,
            isEmail: "",
          });
          this.onAuthChanged.emit({
            isAdmin: false,
            isAuthenticated: false,
            isEmail: "",
          });

          sub.unsubscribe();
        },
      });
  }
}

export class LoginDTO {
  email!: string;
  password!: string;
  twoFactorCode?: string;
  twoFactorRecoveryCode?: string;
  useSessionCookie?: boolean;
}

export class RegisterDTO {
  email!: string;
  password!: string;
}

export class AuthState {
  isAuthenticated!: boolean;
  isAdmin!: boolean;
  isEmail!: string;
}
