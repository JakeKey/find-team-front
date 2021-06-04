import { call, put, StrictEffect } from 'redux-saga/effects';

import {
  CreateProjectActionType,
  createProjectActionSuccess,
  createProjectActionError,
  GetProjectActionType,
  getProjectActionSuccess,
  getProjectActionError,
} from 'store/actions';
import { ErrorCodes, SuccessCodes } from 'types/enums';
import {
  CreateProjectResponseData,
  ResponseSuccess,
  GetProjectResponseData,
} from 'types/interfaces';
import api from 'utils/api';

const {
  projects: { get, create },
} = api;

export function* projectsCreate(
  action: CreateProjectActionType
): Generator<StrictEffect, void, ResponseSuccess<CreateProjectResponseData>> {
  try {
    const result = yield call(create, action.payload);
    yield put(createProjectActionSuccess(result?.success || SuccessCodes.SUCCESS));
  } catch (e) {
    yield put(createProjectActionError(e?.message || ErrorCodes.SOMETHING_WENT_WRONG));
  }
}

export function* projectsGet(
  action: GetProjectActionType
): Generator<StrictEffect, void, ResponseSuccess<GetProjectResponseData>> {
  try {
    const result = yield call(get, action.payload);
    yield put(getProjectActionSuccess(result));
  } catch (e) {
    yield put(getProjectActionError(e?.message || ErrorCodes.SOMETHING_WENT_WRONG));
  }
}
