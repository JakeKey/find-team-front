import { ErrorCodes } from 'types/enums';
import { Action, RegisterReqBody } from 'types/interfaces';

export enum AUTH {
  REGISTER_REQUESTED = 'REGISTER_REQUESTED',
  REGISTER_SUCCEEDED = 'REGISTER_SUCCEEDED',
  REGISTER_FAILED = 'REGISTER_FAILED',
}

export type RegisterActionType = Action<AUTH.REGISTER_REQUESTED, RegisterReqBody>;
export type RegisterActionSuccessType = Action<AUTH.REGISTER_SUCCEEDED, undefined>;
export type RegisterActionErrorType = Action<AUTH.REGISTER_FAILED, ErrorCodes>;

export type AuthActionTypes =
  | RegisterActionType
  | RegisterActionSuccessType
  | RegisterActionErrorType;

export const registerAction = (data: RegisterReqBody): RegisterActionType => {
  return {
    type: AUTH.REGISTER_REQUESTED,
    payload: data,
  };
};

export const registerActionSuccess = (): RegisterActionSuccessType => {
  return {
    type: AUTH.REGISTER_SUCCEEDED,
  };
};

export const registerActionError = (error: ErrorCodes): RegisterActionErrorType => {
  return {
    type: AUTH.REGISTER_FAILED,
    payload: error,
  };
};
