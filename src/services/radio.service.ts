import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RadioModel } from '../models/RadioModel';


@Injectable({
  providedIn: 'root',
})
export class RadioService {
  private API_URL = 'https://localhost:7057/';

  constructor(private http: HttpClient) {}

  getDados(): Observable<RadioModel[]> {
    return this.http.get<any>(`${this.API_URL}Conteudo`).pipe(
      map(response => Object.values(response))
    );
  }
}
