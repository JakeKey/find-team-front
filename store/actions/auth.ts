import { Action, RegisterArgsType } from 'types/interfaces';

export enum AUTH {
  REGISTER_REQUESTED = 'REGISTER_REQUESTED',
  REGISTER_SUCCEEDED = 'REGISTER_SUCCEEDED',
  REGISTER_FAILED = 'REGISTER_FAILED',
}

export type RegisterActionType = Action<AUTH.REGISTER_REQUESTED, RegisterArgsType>;
export type RegisterActionSuccessType = Action<AUTH.REGISTER_SUCCEEDED, RegisterArgsType>;
export type RegisterActionErrorType = Action<AUTH.REGISTER_FAILED, undefined>;

export type AuthActionTypes =
  | RegisterActionType
  | RegisterActionSuccessType
  | RegisterActionErrorType;

export const registerAction = (data: RegisterArgsType): RegisterActionType => {
  return {
    type: AUTH.REGISTER_REQUESTED,
    payload: data,
  };
};

export const registerActionSuccess = (data: RegisterArgsType): RegisterActionSuccessType => {
  return {
    type: AUTH.REGISTER_SUCCEEDED,
    payload: data,
  };
};

export const registerActionError = (): RegisterActionErrorType => {
  return {
    type: AUTH.REGISTER_FAILED,
  };
};
