import { ErrorCodes, SuccessCodes } from 'types/enums';

import { ProjectType } from './project';

export interface Action<T, K> {
  type: T;
  payload?: K;
}

export interface ResponseModel<T> {
  data: T;
  success?: SuccessCodes;
  error?: ErrorCodes;
}

export type ResponseSuccess<T> = Pick<ResponseModel<T>, 'data' | 'success'>;

export interface BasicStateType {
  isLoading: boolean;
  error?: ErrorCodes;
  success?: SuccessCodes;
}

export type ProjectFormTypes = Pick<ProjectType, 'name' | 'description' | 'positions'>;
