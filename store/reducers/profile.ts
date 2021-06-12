import { ProfileActionTypes, PROFILE } from 'store/actions';
import { BasicStateType, GetProfileResponseData } from 'types/interfaces';

export interface ProfileStateType extends BasicStateType {
  profile?: GetProfileResponseData;
}

export const INITIAL_STATE_PROJECTS: ProfileStateType = {
  isLoading: false,
};

export const profileReducer = (
  state = INITIAL_STATE_PROJECTS,
  action: ProfileActionTypes
): ProfileStateType => {
  switch (action.type) {
    case PROFILE.GET_PROFILE_REQUESTED:
      return {
        ...state,
        isLoading: true,
      };
    case PROFILE.GET_PROFILE_SUCCEEDED:
      return {
        ...state,
        isLoading: false,
        profile: action.payload.data,
        success: action.payload.success,
        error: undefined,
      };
    case PROFILE.GET_PROFILE_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        success: undefined,
      };
    case PROFILE.UNSET_PROFILE_STATES_REQUESTED:
      return {
        ...state,
      };
    case PROFILE.UNSET_PROFILE_STATES_DONE:
      return {
        ...state,
        success: undefined,
        error: undefined,
      };
    default:
      return state;
  }
};
