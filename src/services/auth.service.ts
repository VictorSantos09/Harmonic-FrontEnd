import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { API_URL } from './API_URL';
import { AuthEventService } from './auth-event.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  @Output() onAuthChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  get isAuthenticated(): Observable<boolean> {
    return this._http.get<boolean>(`${API_URL.URL}auth`).pipe(
      map(() => true),
      catchError(() => of(false))
    );
  }

  constructor(
    private _http: HttpClient,
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
          this._authEventService.emitIsAuthenticated(true);
          this.onAuthChanged.emit(true);
        },
        error: () => {
          this._authEventService.emitIsAuthenticated(false);
          this.onAuthChanged.emit(false);
        },
      });
  }

  public logout() {
    this._authEventService.emitIsAuthenticated(false);
    this.onAuthChanged.emit(false);
  }
}

export class LoginDTO {
  email!: string;
  password!: string;
  twoFactorCode?: string;
  twoFactorRecoveryCode?: string;
  useSessionCookie?: boolean;
}
