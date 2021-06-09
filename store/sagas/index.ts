import { takeLatest } from 'redux-saga/effects';

import { AUTH, PROFILE, PROJECTS } from 'store/actions';

import { authRegister, authLogin, authVerify } from './auth';
import { profileGet } from './profile';
import { projectsCreate, projectsGet, projectsGetAll } from './projects';

export default function* rootSaga(): Generator {
  yield takeLatest(AUTH.REGISTER_REQUESTED, authRegister);
  yield takeLatest(AUTH.LOGIN_REQUESTED, authLogin);
  yield takeLatest(AUTH.VERIFY_REQUESTED, authVerify);
  yield takeLatest(PROJECTS.CREATE_PROJECT_REQUESTED, projectsCreate);
  yield takeLatest(PROJECTS.GET_PROJECT_REQUESTED, projectsGet);
  yield takeLatest(PROJECTS.GET_ALL_PROJECTS_REQUESTED, projectsGetAll);
  yield takeLatest(PROFILE.GET_PROFILE_REQUESTED, profileGet);
}
