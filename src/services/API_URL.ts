import { environment } from '../environments/environment';

export class API_URL {
  static readonly URL = 'https://localhost:7057/';

  private _getURL() {
    console.log(environment.production);
    console.log(environment.API_BACKEND_URL);
  }
}
