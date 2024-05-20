import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthState } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthEventService {
  constructor() {}
  private eventSubject = new Subject<AuthState>();

  emitIsAuthenticated(value: AuthState) {
    this.eventSubject.next(value);
  }

  getEventIsAuthenticated() {
    return this.eventSubject.asObservable();
  }
}
