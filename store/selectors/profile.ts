import { RootState } from 'store';
import { ProfileStateType } from 'store/reducers/profile';
import { ProfileType } from 'types/interfaces';

const REDUCER_PREFIX = 'profile';

const selectProfileState = (state: RootState): ProfileStateType => state[REDUCER_PREFIX];
const selectProfile = (state: RootState): ProfileType | undefined => state[REDUCER_PREFIX].profile;

export const profileSelectors = {
  selectProfileState,
  selectProfile,
};
