import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaisModel } from '../app';
import { API_URL } from './API_URL';
import { ResponseData } from './response';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  constructor(private _http: HttpClient) {}

  getAll() {
    return this._http.get<ResponseData<PaisModel>>(`${API_URL.URL}pais`, {
      withCredentials: true,
    });
  }
}
