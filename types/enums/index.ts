export enum UserPositions {
  frontend = 'frontend',
  backend = 'backend',
  fullstack = 'fullstack',
  designer = 'designer',
  devops = 'devops',
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
  INVALID_VERIFICATION_CODE = 'INVALID_VERIFICATION_CODE',
  VERIFICATION_CODE_EXPIRED = 'VERIFICATION_CODE_EXPIRED',
  USER_ALREADY_VERIFIED = 'USER_ALREADY_VERIFIED',
  USER_NOT_VERIFIED = 'USER_NOT_VERIFIED',
  UNAUTHORIZED = 'UNAUTHORIZED',
  NOT_FOUND = 'NOT_FOUND',
  BAD_REQUEST = 'BAD_REQUEST',
}

export enum SuccessCodes {
  SUCCESS = 'SUCCESS',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  REGISTER_SUCCESS = 'REGISTER_SUCCESS',
  VERIFICATION_SUCCESS = 'VERIFICATION_SUCCESS',
  PROJECT_CREATED = 'PROJECT_CREATED',
  PROFILE_DATA_RECEIVED = 'PROFILE_DATA_RECEIVED',
  PROJECT_DETAILS_RECEIVED = 'PROJECT_DETAILS_RECEIVED',
  PROJECTS_LIST_RECEIVED = 'PROJECTS_LIST_RECEIVED',
}
