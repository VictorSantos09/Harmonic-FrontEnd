import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RadioModel } from '../app/components/models';
import { Response } from './response';

@Injectable({
  providedIn: 'root',
})
export class RadioService {
  private API_URL = 'https://localhost:7057/';

  constructor(private _http: HttpClient) {}

  getAll(): Observable<Response<RadioModel>> {
    return this._http.get<Response<RadioModel>>(`${this.API_URL}Conteudo`);
  }
}
