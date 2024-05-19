export class Response {
  isSuccess!: boolean;
  isFailure!: boolean;
  error!: Error;
}

export class ResponseData<TType> extends Response {
  data!: TType[];
}

export class ResponseDataSingle<TType> extends Response {
  data!: TType;
}

export class ResponseDataEmpty extends Response {}

export class Error {
  code: string;
  message: string;

  constructor(code: string, message: string) {
    this.code = code;
    this.message = message;
  }
}
