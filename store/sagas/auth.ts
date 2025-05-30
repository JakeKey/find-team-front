import { call, put, StrictEffect } from 'redux-saga/effects';

import {
  loginActionError,
  loginActionSuccess,
  LoginActionType,
  registerActionError,
  registerActionSuccess,
  RegisterActionType,
  unsetAuthStatesActionDone,
  VerifyActionType,
} from 'store/actions';
import { SuccessCodes } from 'types/enums';
import {
  LoginResponseData,
  RegisterResponseData,
  ResponseSuccess,
  VerifyCodeResponseData,
} from 'types/interfaces';
import api from 'utils/api';

import { getErrorMessage } from '.';

const {
  auth: { register, login, verify },
} = api;

export function* authRegister(
  action: RegisterActionType,
): Generator<StrictEffect, void, ResponseSuccess<RegisterResponseData>> {
  try {
    const result = yield call(register, action.payload);
    yield put(registerActionSuccess(result?.success || SuccessCodes.SUCCESS));
  } catch (e) {
    yield put(registerActionError(getErrorMessage(e)));
  }
}

export function* authLogin(
  action: LoginActionType,
): Generator<StrictEffect, void, ResponseSuccess<LoginResponseData>> {
  try {
    const result = yield call(login, action.payload);
    if (!result?.data?.token) throw new Error();

    global.localStorage?.setItem('token', result.data.token);
    yield put(loginActionSuccess(result.success || SuccessCodes.LOGIN_SUCCESS));
  } catch (e) {
    yield put(loginActionError(getErrorMessage(e)));
  }
}

export function* authVerify(
  action: VerifyActionType,
): Generator<StrictEffect, void, ResponseSuccess<VerifyCodeResponseData>> {
  try {
    const result = yield call(verify, action.payload);
    if (!result?.data?.token) throw new Error();

    global.localStorage?.setItem('token', result.data.token);
    yield put(loginActionSuccess(result.success || SuccessCodes.VERIFICATION_SUCCESS));
  } catch (e) {
    yield put(loginActionError(getErrorMessage(e)));
  }
}

export function* authUnsetStates(): Generator {
  yield put(unsetAuthStatesActionDone());
}
