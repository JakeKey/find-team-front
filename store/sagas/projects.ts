import { call, put, StrictEffect } from 'redux-saga/effects';

import {
  CreateProjectActionType,
  createProjectActionSuccess,
  createProjectActionError,
  GetProjectActionType,
  getProjectActionSuccess,
  getProjectActionError,
  GetAllProjectsActionType,
  getAllProjectsActionSuccess,
  getAllProjectsActionError,
  unsetProjectsStatesActionDone,
} from 'store/actions';
import {
  CreateProjectResponseData,
  ResponseSuccess,
  GetProjectResponseData,
  GetAllProjectsResponseData,
} from 'types/interfaces';
import api from 'utils/api';

import { getErrorMessage } from '.';

const {
  projects: { get, create, getAll },
} = api;

export function* projectsCreate(
  action: CreateProjectActionType
): Generator<StrictEffect, void, ResponseSuccess<CreateProjectResponseData>> {
  try {
    const result = yield call(create, action.payload);
    yield put(createProjectActionSuccess(result));
  } catch (e) {
    yield put(createProjectActionError(getErrorMessage(e)));
  }
}

export function* projectsGet(
  action: GetProjectActionType
): Generator<StrictEffect, void, ResponseSuccess<GetProjectResponseData>> {
  try {
    const result = yield call(get, action.payload);
    yield put(getProjectActionSuccess(result));
  } catch (e) {
    yield put(getProjectActionError(getErrorMessage(e)));
  }
}

export function* projectsGetAll(
  action: GetAllProjectsActionType
): Generator<StrictEffect, void, ResponseSuccess<GetAllProjectsResponseData[]>> {
  try {
    const result = yield call(getAll, action.payload);
    yield put(
      getAllProjectsActionSuccess({
        data: { projects: result.data, page: action.payload.page },
        success: result.success,
      })
    );
  } catch (e) {
    yield put(getAllProjectsActionError(getErrorMessage(e)));
  }
}

export function* projectsUnsetStates(): Generator {
  yield put(unsetProjectsStatesActionDone());
}
