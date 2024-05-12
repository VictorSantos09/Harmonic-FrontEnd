import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from './API_URL';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private _http: HttpClient) {}

  public isAdmin() {
    return this._http.get<boolean>(`${API_URL.URL}Admin/is-admin`);
  }
}
