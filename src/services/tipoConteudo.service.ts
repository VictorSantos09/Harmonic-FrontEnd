import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TipoConteudoModel } from '../app';

@Injectable({
  providedIn: 'root',
})
export class TipoConteudoService {
  private API_URL = 'https://localhost:7057/';

  constructor(private http: HttpClient) {}

  getDados(): Observable<TipoConteudoModel[]> {
    return this.http
      .get<any>(`${this.API_URL}TipoConteudo`)
      .pipe(map((response) => Object.values(response)));
  }
}
