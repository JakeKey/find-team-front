import { ErrorCodes } from 'types/enums';
import { Action, ProfileType, ResponseSuccess } from 'types/interfaces';

export enum PROFILE {
  GET_PROFILE_REQUESTED = 'GET_PROFILE_REQUESTED',
  GET_PROFILE_SUCCEEDED = 'GET_PROFILE_SUCCEEDED',
  GET_PROFILE_FAILED = 'GET_PROFILE_FAILED',
}

export type ProfileActionTypes =
  | GetProfileActionType
  | GetProfileActionSuccessType
  | GetProfileActionErrorType;

export type GetProfileActionType = Action<PROFILE.GET_PROFILE_REQUESTED, undefined>;
export type GetProfileActionSuccessType = Required<
  Action<PROFILE.GET_PROFILE_SUCCEEDED, ResponseSuccess<ProfileType>>
>;
export type GetProfileActionErrorType = Required<Action<PROFILE.GET_PROFILE_FAILED, ErrorCodes>>;

export const getProfileAction = (): GetProfileActionType => {
  return {
    type: PROFILE.GET_PROFILE_REQUESTED,
  };
};

export const getProfileActionSuccess = (
  payload: ResponseSuccess<ProfileType>
): GetProfileActionSuccessType => {
  return {
    type: PROFILE.GET_PROFILE_SUCCEEDED,
    payload,
  };
};

export const getProfileActionError = (payload: ErrorCodes): GetProfileActionErrorType => {
  return {
    type: PROFILE.GET_PROFILE_FAILED,
    payload,
  };
};
