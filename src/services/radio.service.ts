import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RadioModel } from '../app/components/models';
import { API_URL } from './API_URL';
import { ResponseData } from './response';

@Injectable({
  providedIn: 'root',
})
export class RadioService {
  constructor(private _http: HttpClient) {}

  getAll(): Observable<ResponseData<RadioModel>> {
    return this._http.get<ResponseData<RadioModel>>(`${API_URL.URL}Conteudo`);
  }

  delete(id: number): Observable<ResponseData<RadioModel>> {
    return this._http.delete<ResponseData<any>>(
      `${API_URL.URL}Conteudo/delete?id=${id}`
    );
  }

  insert(obj: any): Observable<Response> {
    return this._http.post<Response>(`${API_URL.URL}Conteudo/add`, obj);
  }
}
