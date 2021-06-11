import { takeLatest, takeLeading } from 'redux-saga/effects';

import { AUTH, PROFILE, PROJECTS } from 'store/actions';

import { authRegister, authLogin, authVerify, authUnsetStates } from './auth';
import { profileGet, profileUnsetStates } from './profile';
import { projectsCreate, projectsGet, projectsGetAll, projectsUnsetStates } from './projects';

export default function* rootSaga(): Generator {
  yield takeLatest(AUTH.REGISTER_REQUESTED, authRegister);
  yield takeLatest(AUTH.LOGIN_REQUESTED, authLogin);
  yield takeLatest(AUTH.VERIFY_REQUESTED, authVerify);
  yield takeLatest(AUTH.UNSET_AUTH_STATES_REQUESTED, authUnsetStates);

  yield takeLatest(PROJECTS.CREATE_PROJECT_REQUESTED, projectsCreate);
  yield takeLatest(PROJECTS.GET_PROJECT_REQUESTED, projectsGet);
  yield takeLatest(PROJECTS.GET_ALL_PROJECTS_REQUESTED, projectsGetAll);
  yield takeLeading(PROJECTS.UNSET_PROJECTS_STATES_REQUESTED, projectsUnsetStates);

  yield takeLatest(PROFILE.GET_PROFILE_REQUESTED, profileGet);
  yield takeLatest(PROFILE.UNSET_PROFILE_STATES_REQUESTED, profileUnsetStates);
}
