import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { API_URL } from './API_URL';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  get isAuthenticated(): boolean {
    return localStorage.getItem('isAuthenticated') === 'true';
  }

  @Output() onAuthChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  private _isAuthenticated = false;

  constructor(
    private _http: HttpClient,
    private _localStorageService: LocalStorageService
  ) {}

  public login(dto: LoginDTO) {
    return this._http
      .post<any>(`${API_URL.URL}login`, dto, {
        params: { useCookies: 'true' },
        withCredentials: true,
      })
      .subscribe({
        next: () => {
          this._isAuthenticated = true;
          this._setLocalStorage();
          this.onAuthChanged.emit(this._isAuthenticated);
        },
        error: () => {
          this._isAuthenticated = false;
          this._setLocalStorage();
          this.onAuthChanged.emit(this._isAuthenticated);
        },
      });
  }

  public logout() {
    this._isAuthenticated = false;
    this._setLocalStorage();
    this.onAuthChanged.emit(this._isAuthenticated);
  }

  private _setLocalStorage() {
    this._localStorageService.setItem(
      'isAuthenticated',
      this._isAuthenticated.toString()
    );
  }
}

export class LoginDTO {
  email!: string;
  password!: string;
  twoFactorCode?: string;
  twoFactorRecoveryCode?: string;
  useSessionCookie?: boolean;
}
