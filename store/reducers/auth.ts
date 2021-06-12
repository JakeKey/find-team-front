import { AuthActionTypes, AUTH } from 'store/actions';
import { BasicStateType } from 'types/interfaces';

export type AuthStateType = BasicStateType;

export const INITIAL_STATE_AUTH: AuthStateType = {
  isLoading: false,
};

export const authReducer = (state = INITIAL_STATE_AUTH, action: AuthActionTypes): AuthStateType => {
  switch (action.type) {
    case AUTH.REGISTER_REQUESTED:
      return {
        ...state,
        isLoading: true,
      };
    case AUTH.REGISTER_SUCCEEDED:
      return {
        ...state,
        isLoading: false,
        success: action.payload,
        error: undefined,
      };
    case AUTH.REGISTER_FAILED:
      return {
        ...state,
        isLoading: false,
        success: undefined,
        error: action.payload,
      };
    case AUTH.LOGIN_REQUESTED:
      return {
        ...state,
        isLoading: true,
      };
    case AUTH.LOGIN_SUCCEEDED:
      return {
        ...state,
        isLoading: false,
        error: undefined,
        success: action.payload,
      };
    case AUTH.LOGIN_FAILED:
      return {
        ...state,
        isLoading: false,
        success: undefined,
        error: action.payload,
      };
    case AUTH.VERIFY_REQUESTED:
      return {
        ...state,
        isLoading: true,
      };
    case AUTH.VERIFY_SUCCEEDED:
      return {
        ...state,
        isLoading: false,
        error: undefined,
        success: action.payload,
      };
    case AUTH.VERIFY_FAILED:
      return {
        ...state,
        isLoading: false,
        success: undefined,
        error: action.payload,
      };
    case AUTH.UNSET_AUTH_STATES_REQUESTED:
      return {
        ...state,
      };
    case AUTH.UNSET_AUTH_STATES_DONE:
      return {
        ...state,
        success: undefined,
        error: undefined,
      };
    default:
      return state;
  }
};
