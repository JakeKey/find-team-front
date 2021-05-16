import { AuthActionTypes } from 'store/actions';
import { ErrorCodes, SuccessCodes } from 'types/enums';

export interface AuthStateType {
  isLoading: boolean;
  error?: ErrorCodes;
  success?: SuccessCodes;
}

export const INITIAL_STATE_AUTH: AuthStateType = {
  isLoading: false,
};

export const authReducer = (state = INITIAL_STATE_AUTH, action: AuthActionTypes): AuthStateType => {
  switch (action.type) {
    case 'REGISTER_REQUESTED':
      return {
        ...state,
        isLoading: true,
      };
    case 'REGISTER_SUCCEEDED':
      return {
        ...state,
        isLoading: false,
        success: action.payload,
        error: undefined,
      };
    case 'REGISTER_FAILED':
      return {
        ...state,
        isLoading: false,
        success: undefined,
        error: action.payload,
      };
    case 'LOGIN_REQUESTED':
      return {
        ...state,
        isLoading: true,
      };
    case 'LOGIN_SUCCEEDED':
      return {
        ...state,
        isLoading: false,
        error: undefined,
        success: action.payload,
      };
    case 'LOGIN_FAILED':
      return {
        ...state,
        isLoading: false,
        success: undefined,
        error: action.payload,
      };
    default:
      return state;
  }
};
