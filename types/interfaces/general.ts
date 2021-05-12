import { ErrorCodes, SuccessCodes } from 'types/enums';

export interface Action<T, K> {
  type: T;
  payload?: K;
}

export interface ResponseModel<T> {
  data: T;
  success?: SuccessCodes;
  error?: ErrorCodes;
}
