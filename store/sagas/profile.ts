import { call, put, StrictEffect } from 'redux-saga/effects';

import {
  getProfileActionSuccess,
  getProfileActionError,
  unsetProfileStatesActionDone,
} from 'store/actions';
import { ResponseSuccess, GetProfileResponseData } from 'types/interfaces';
import api from 'utils/api';
import { checkIfTokenExists } from 'utils/helpers';

import { getErrorMessage } from '.';

const {
  profile: { get },
} = api;

export function* profileGet(): Generator<
  StrictEffect,
  void,
  ResponseSuccess<GetProfileResponseData>
> {
  try {
    const result = yield call(get);
    yield put(getProfileActionSuccess(result));
  } catch (e) {
    const tokenExist = checkIfTokenExists();
    if (tokenExist) global.localStorage?.removeItem('token');
    yield put(getProfileActionError(getErrorMessage(e)));
  }
}

export function* profileUnsetStates(): Generator {
  yield put(unsetProfileStatesActionDone());
}
