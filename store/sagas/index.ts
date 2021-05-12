import { takeLatest } from 'redux-saga/effects';

import { AUTH } from 'store/actions';

import { authRegister } from './auth';

export default function* rootSaga(): Generator {
  yield takeLatest(AUTH.REGISTER_REQUESTED, authRegister);
}
