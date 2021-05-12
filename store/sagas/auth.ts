import { call, put } from 'redux-saga/effects';

import { registerActionError, registerActionSuccess } from 'store/actions';
import { ErrorCodes } from 'types/enums';
import { RegisterReqBody } from 'types/interfaces';
import api from 'utils/api';

interface RegisterAction {
  type: string;
  payload: RegisterReqBody;
}

export function* authRegister(action: RegisterAction): Generator {
  try {
    yield call(api.auth.register, action.payload);
    yield put(registerActionSuccess());
  } catch (e) {
    yield put(registerActionError(e?.message || ErrorCodes.SOMETHING_WENT_WRONG));
  }
}
