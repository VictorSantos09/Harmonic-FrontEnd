export class Response<TType> {
  isSuccess: boolean;
  isFailure: boolean;
  data: TType[];
  error: Error;

  constructor(
    isSuccess: boolean,
    isFailure: boolean,
    data: TType[],
    error: Error
  ) {
    this.isSuccess = isSuccess;
    this.isFailure = isFailure;
    this.data = data;
    this.error = error;
  }
}

export class Error {
  code: string;
  message: string;

  constructor(code: string, message: string) {
    this.code = code;
    this.message = message;
  }
}
