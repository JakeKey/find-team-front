export enum UserPositions {
  frontend = 'frontend',
  backend = 'backend',
  fullstack = 'fullstack',
  designer = 'designer',
  PM = 'PM',
  PO = 'PO',
  other = 'other',
}

export enum Status {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  TOO_MANY_REQUESTS = 429,
  INTERNAL_SERVER_ERROR = 500,
}

export enum ErrorCodes {
  SOMETHING_WENT_WRONG = 'SOMETHING_WENT_WRONG',
  USERNAME_ALREADY_TAKEN = 'USERNAME_ALREADY_TAKEN',
  EMAIL_ALREADY_REGISTERED = 'EMAIL_ALREADY_REGISTERED',
  VALIDATION_ERROR = 'VALIDATION_ERROR',
  INVALID_CAPTCHA = 'INVALID_CAPTCHA',
  MISSING_CREDENTIALS = 'MISSING_CREDENTIALS',
  INVALID_CREDENTIALS = 'INVALID_CREDENTIALS',
}

export enum SuccessCodes {
  SUCCESS = 'SUCCESS',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
}
