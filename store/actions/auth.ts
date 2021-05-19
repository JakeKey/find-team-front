import { ErrorCodes, SuccessCodes } from 'types/enums';
import { Action, LoginReqBody, RegisterReqBody, VerifyCodeReqBody } from 'types/interfaces';

export enum AUTH {
  REGISTER_REQUESTED = 'REGISTER_REQUESTED',
  REGISTER_SUCCEEDED = 'REGISTER_SUCCEEDED',
  REGISTER_FAILED = 'REGISTER_FAILED',
  LOGIN_REQUESTED = 'LOGIN_REQUESTED',
  LOGIN_SUCCEEDED = 'LOGIN_SUCCEEDED',
  LOGIN_FAILED = 'LOGIN_FAILED',
  VERIFY_REQUESTED = 'VERIFY_REQUESTED',
  VERIFY_SUCCEEDED = 'VERIFY_SUCCEEDED',
  VERIFY_FAILED = 'VERIFY_FAILED',
}

export type AuthActionTypes =
  | RegisterActionType
  | RegisterActionSuccessType
  | RegisterActionErrorType
  | LoginActionType
  | LoginActionSuccessType
  | LoginActionErrorType
  | VerifyActionType
  | VerifyActionSuccessType
  | VerifyActionErrorType;

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

export type VerifyActionType = Required<Action<AUTH.VERIFY_REQUESTED, VerifyCodeReqBody>>;
export type VerifyActionSuccessType = Required<Action<AUTH.VERIFY_SUCCEEDED, SuccessCodes>>;
export type VerifyActionErrorType = Required<Action<AUTH.VERIFY_FAILED, ErrorCodes>>;

export const verifyAction = (payload: VerifyCodeReqBody): VerifyActionType => {
  return {
    type: AUTH.VERIFY_REQUESTED,
    payload,
  };
};

export const verifyActionSuccess = (payload: SuccessCodes): VerifyActionSuccessType => {
  return {
    type: AUTH.VERIFY_SUCCEEDED,
    payload,
  };
};

export const verifyActionError = (payload: ErrorCodes): VerifyActionErrorType => {
  return {
    type: AUTH.VERIFY_FAILED,
    payload,
  };
};
