import { AuthActionTypes } from 'store/actions';
import { ErrorCodes } from 'types/enums';

export interface AuthStateType {
  token?: string;
  isLoading: boolean;
  error?: ErrorCodes;
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
      };
    case 'REGISTER_FAILED':
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
