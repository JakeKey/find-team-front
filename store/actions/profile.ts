import { ErrorCodes } from 'types/enums';
import { Action, ProfileType, ResponseSuccess } from 'types/interfaces';

export enum PROFILE {
  GET_PROFILE_REQUESTED = 'GET_PROFILE_REQUESTED',
  GET_PROFILE_SUCCEEDED = 'GET_PROFILE_SUCCEEDED',
  GET_PROFILE_FAILED = 'GET_PROFILE_FAILED',
  UNSET_PROFILE_STATES_REQUESTED = 'UNSET_PROFILE_STATES_REQUESTED',
  UNSET_PROFILE_STATES_DONE = 'UNSET_PROFILE_STATES_DONE',
}

export type ProfileActionTypes =
  | GetProfileActionType
  | GetProfileActionSuccessType
  | GetProfileActionErrorType
  | UnsetProfileStatesActionType
  | UnsetProfileStatesActionDoneType;

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

export type UnsetProfileStatesActionType = Action<
  PROFILE.UNSET_PROFILE_STATES_REQUESTED,
  undefined
>;
export type UnsetProfileStatesActionDoneType = Action<PROFILE.UNSET_PROFILE_STATES_DONE, undefined>;

export const unsetProfileStatesAction = (): UnsetProfileStatesActionType => {
  return {
    type: PROFILE.UNSET_PROFILE_STATES_REQUESTED,
  };
};

export const unsetProfileStatesActionDone = (): UnsetProfileStatesActionDoneType => {
  return {
    type: PROFILE.UNSET_PROFILE_STATES_DONE,
  };
};
