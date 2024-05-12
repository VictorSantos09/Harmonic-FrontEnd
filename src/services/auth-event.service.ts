import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthEventService {
  constructor() {}
  private eventSubject = new Subject<any>();

  emitIsAuthenticated(value: boolean) {
    this.eventSubject.next(value);
  }

  getEventIsAuthenticated() {
    return this.eventSubject.asObservable();
  }
}
