import { ErrorCodes, SuccessCodes } from 'types/enums';
import { Action, LoginReqBody, RegisterReqBody } from 'types/interfaces';

export enum AUTH {
  REGISTER_REQUESTED = 'REGISTER_REQUESTED',
  REGISTER_SUCCEEDED = 'REGISTER_SUCCEEDED',
  REGISTER_FAILED = 'REGISTER_FAILED',
  LOGIN_REQUESTED = 'LOGIN_REQUESTED',
  LOGIN_SUCCEEDED = 'LOGIN_SUCCEEDED',
  LOGIN_FAILED = 'LOGIN_FAILED',
}

export type AuthActionTypes =
  | RegisterActionType
  | RegisterActionSuccessType
  | RegisterActionErrorType
  | LoginActionType
  | LoginActionErrorType
  | LoginActionSuccessType;

export type RegisterActionType = Required<Action<AUTH.REGISTER_REQUESTED, RegisterReqBody>>;
export type RegisterActionSuccessType = Required<Action<AUTH.REGISTER_SUCCEEDED, SuccessCodes>>;
export type RegisterActionErrorType = Required<Action<AUTH.REGISTER_FAILED, ErrorCodes>>;

export const registerAction = (payload: RegisterReqBody): RegisterActionType => {
  return {
    type: AUTH.REGISTER_REQUESTED,
    payload,
  };
};

export const registerActionSuccess = (payload: SuccessCodes): RegisterActionSuccessType => {
  return {
    type: AUTH.REGISTER_SUCCEEDED,
    payload,
  };
};

export const registerActionError = (payload: ErrorCodes): RegisterActionErrorType => {
  return {
    type: AUTH.REGISTER_FAILED,
    payload,
  };
};

export type LoginActionType = Required<Action<AUTH.LOGIN_REQUESTED, LoginReqBody>>;
export type LoginActionSuccessType = Required<Action<AUTH.LOGIN_SUCCEEDED, SuccessCodes>>;
export type LoginActionErrorType = Required<Action<AUTH.LOGIN_FAILED, ErrorCodes>>;

export const loginAction = (payload: LoginReqBody): LoginActionType => {
  return {
    type: AUTH.LOGIN_REQUESTED,
    payload,
  };
};

export const loginActionSuccess = (payload: SuccessCodes): LoginActionSuccessType => {
  return {
    type: AUTH.LOGIN_SUCCEEDED,
    payload,
  };
};

export const loginActionError = (payload: ErrorCodes): LoginActionErrorType => {
  return {
    type: AUTH.LOGIN_FAILED,
    payload,
  };
};
