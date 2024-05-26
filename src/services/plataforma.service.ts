import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PlataformaModel } from '../models';
import { API_URL } from './API_URL';
import { ResponseData } from './response';

@Injectable({
  providedIn: 'root',
})
export class PlataformaService {
  constructor(private _http: HttpClient) {}

  getAll() {
    return this._http.get<ResponseData<PlataformaModel>>(
      `${API_URL.URL}tipoConteudo`,
      {
        withCredentials: true,
      }
    );
  }
}
