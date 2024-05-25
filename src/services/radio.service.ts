import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConteudoDto } from '../../projects/page-crud-radio/dto';
import { ConteudoDetalhesDto, ConteudoModel, ConteudoTopDto } from '../app';
import { API_URL } from './API_URL';
import { Response, ResponseData, ResponseDataSingle } from './response';

@Injectable({
  providedIn: 'root',
})
export class RadioService {
  constructor(private _http: HttpClient) {}

  getAll(): Observable<ResponseData<ConteudoModel>> {
    return this._http.get<ResponseData<ConteudoModel>>(
      `${API_URL.URL}Conteudo`,
      {
        withCredentials: true,
      }
    );
  }

  delete(id: number): Observable<ResponseData<ConteudoModel>> {
    return this._http.delete<ResponseData<any>>(
      `${API_URL.URL}Conteudo/delete?id=${id}`,
      {
        withCredentials: true,
      }
    );
  }

  deleteRange(ids: number[]): Observable<Response> {
    return this._http.delete<Response>(`${API_URL.URL}Conteudo/range`, {
      body: ids,
      withCredentials: true,
    });
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

  get(id: number): Observable<ResponseData<ConteudoModel>> {
    return this._http.get<ResponseData<ConteudoModel>>(
      `${API_URL.URL}Conteudo/${id}`,
      {
        withCredentials: true,
      }
    );
  }

  getTopRadios(): Observable<ResponseData<ConteudoTopDto>> {
    return this._http.get<ResponseData<ConteudoModel>>(
      `${API_URL.URL}Conteudo/top-radios`,
      {
        withCredentials: true,
      }
    );
  }

  getTopPodcasts(): Observable<ResponseData<ConteudoTopDto>> {
    return this._http.get<ResponseData<ConteudoModel>>(
      `${API_URL.URL}Conteudo/top-podcasts`,
      {
        withCredentials: true,
      }
    );
  }

  getDetalhes(id: number): Observable<ResponseDataSingle<ConteudoDetalhesDto>> {
    return this._http.get<ResponseDataSingle<ConteudoDetalhesDto>>(
      `${API_URL.URL}Conteudo/detalhes`,
      {
        params: { id: id.toString() },
        withCredentials: true,
      }
    );
  }

  getConteudoPlataformasURL(id: number): Observable<ResponseData<string>> {
    return this._http.get<ResponseData<string>>(
      `${API_URL.URL}Conteudo/conteudo-plataformas-url`,
      {
        params: { id: id.toString() },
        withCredentials: true,
      }
    );
  }

  getConteudoLiked(id:number) :Observable<ResponseDataSingle<boolean>> {
    return this._http.get<ResponseDataSingle<boolean>>(
      `${API_URL.URL}conteudoReacao/liked`,
      {
        params: { idConteudo: id.toString() },
      }
    );
  } 
}


