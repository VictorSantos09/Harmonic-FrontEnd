import { environment } from '../environments/environment';

export class API_URL {
  static readonly URL = this._getURL();

  private static _getURL() {
    return environment.API_BACKEND_URL;
  }
}
