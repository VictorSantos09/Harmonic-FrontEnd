import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConteudoDto } from '../../projects/page-conteudo/dto';
import { RadioModel } from '../app';
import { API_URL, ResponseData } from './consts';

@Injectable({
  providedIn: 'root',
})
export class ConteudoService {
  constructor(private _http: HttpClient) {}

  getAll(): Observable<ResponseData<RadioModel>> {
    return this._http.get<ResponseData<RadioModel>>(`${API_URL.URL}Conteudo`, {
      withCredentials: true,
    });
  }

  delete(id: number): Observable<ResponseData<RadioModel>> {
    return this._http.delete<ResponseData<any>>(
      `${API_URL.URL}Conteudo/delete?id=${id}`,
      {
        withCredentials: true,
      }
    );
  }

  insert(obj: ConteudoDto): Observable<Response> {
    return this._http.post<Response>(`${API_URL.URL}Conteudo/add`, obj, {
      withCredentials: true,
    });
  }

  update(obj: ConteudoDto): Observable<Response> {
    return this._http.put<Response>(`${API_URL.URL}Conteudo/update`, obj, {
      withCredentials: true,
    });
  }
}
