import { AuthActionTypes } from 'store/actions';

export interface AuthStateType {
  jwt?: string;
  registered?: boolean;
  isLoading: boolean;
}

export const INITIAL_STATE_AUTH: AuthStateType = {
  jwt: '',
  registered: false,
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
        ...action.payload,
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
