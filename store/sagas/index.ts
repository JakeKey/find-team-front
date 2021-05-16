import { takeLatest } from 'redux-saga/effects';

import { AUTH } from 'store/actions';

import { authRegister, authLogin } from './auth';

export default function* rootSaga(): Generator {
  yield takeLatest(AUTH.REGISTER_REQUESTED, authRegister);
  yield takeLatest(AUTH.LOGIN_REQUESTED, authLogin);
}
