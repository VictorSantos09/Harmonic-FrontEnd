import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConteudosCurtidosModel } from '../models';
import { API_URL } from './API_URL';
import { ResponseData } from './response';

@Injectable({
  providedIn: 'root',
})
export class ConteudoCurtidosService {
  constructor(private _http: HttpClient) {}

  getAll(): Observable<ResponseData<ConteudosCurtidosModel>> {
    return this._http.get<ResponseData<ConteudosCurtidosModel>>(
      `${API_URL.URL}conteudoreacao/conteudosCurtidos`,
      {
        withCredentials: true,
      }
    );
  }
}
