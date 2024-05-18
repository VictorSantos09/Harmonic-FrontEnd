export class API_URL {
  public static readonly URL_DEVELOPMENT = 'https://localhost:7057/';
  static readonly URL = this._getURL();

  private static _getURL() {
    // console.log(environment.production);
    // console.log(environment.API_BACKEND_URL);
  }
}
