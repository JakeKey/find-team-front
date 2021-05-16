import { RootState } from 'store';
import { AuthStateType } from 'store/reducers/auth';

const REDUCER_PREFIX = 'auth';

const selectAuthState = (state: RootState): AuthStateType => state[REDUCER_PREFIX];

export const authSelectors = {
  selectAuthState,
};
