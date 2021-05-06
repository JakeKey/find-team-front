import { call, put, takeLatest } from 'redux-saga/effects';
import { AUTH, registerActionError, registerActionSuccess } from 'store/actions';

import { RegisterArgsType } from 'types/interfaces';
import api from 'utils/api';

interface RegisterAction {
  type: string;
  payload: RegisterArgsType;
}

function* authRegister(action: RegisterAction): Generator {
  try {
    yield call(api.auth.register, action.payload);
    yield put(registerActionSuccess(action.payload));
  } catch (e) {
    yield put(registerActionError());
  }
}

export default function* rootSaga(): Generator {
  yield takeLatest(AUTH.REGISTER_REQUESTED, authRegister);
}
