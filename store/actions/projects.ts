import { ErrorCodes, SuccessCodes } from 'types/enums';
import {
  Action,
  CreateProjectReqBody,
  GetProjectByIdQueryParams,
  ProjectType,
  ResponseSuccess,
} from 'types/interfaces';

export enum PROJECTS {
  CREATE_PROJECT_REQUESTED = 'CREATE_PROJECT_REQUESTED',
  CREATE_PROJECT_SUCCEEDED = 'CREATE_PROJECT_SUCCEEDED',
  CREATE_PROJECT_FAILED = 'CREATE_PROJECT_FAILED',
  GET_PROJECT_REQUESTED = 'GET_PROJECT_REQUESTED',
  GET_PROJECT_SUCCEEDED = 'GET_PROJECT_SUCCEEDED',
  GET_PROJECT_FAILED = 'GET_PROJECT_FAILED',
}

export type ProjectsActionTypes =
  | CreateProjectActionType
  | CreateProjectActionSuccessType
  | CreateProjectActionErrorType
  | GetProjectActionType
  | GetProjectActionSuccessType
  | GetProjectActionErrorType;

export type CreateProjectActionType = Required<
  Action<PROJECTS.CREATE_PROJECT_REQUESTED, CreateProjectReqBody>
>;
export type CreateProjectActionSuccessType = Required<
  Action<PROJECTS.CREATE_PROJECT_SUCCEEDED, SuccessCodes>
>;
export type CreateProjectActionErrorType = Required<
  Action<PROJECTS.CREATE_PROJECT_FAILED, ErrorCodes>
>;

export const createProjectAction = (payload: CreateProjectReqBody): CreateProjectActionType => {
  return {
    type: PROJECTS.CREATE_PROJECT_REQUESTED,
    payload,
  };
};

export const createProjectActionSuccess = (
  payload: SuccessCodes
): CreateProjectActionSuccessType => {
  return {
    type: PROJECTS.CREATE_PROJECT_SUCCEEDED,
    payload,
  };
};

export const createProjectActionError = (payload: ErrorCodes): CreateProjectActionErrorType => {
  return {
    type: PROJECTS.CREATE_PROJECT_FAILED,
    payload,
  };
};

export type GetProjectActionType = Required<
  Action<PROJECTS.GET_PROJECT_REQUESTED, GetProjectByIdQueryParams>
>;
export type GetProjectActionSuccessType = Required<
  Action<PROJECTS.GET_PROJECT_SUCCEEDED, ResponseSuccess<ProjectType>>
>;
export type GetProjectActionErrorType = Required<Action<PROJECTS.GET_PROJECT_FAILED, ErrorCodes>>;

export const getProjectAction = (payload: GetProjectByIdQueryParams): GetProjectActionType => {
  return {
    type: PROJECTS.GET_PROJECT_REQUESTED,
    payload,
  };
};

export const getProjectActionSuccess = (
  payload: ResponseSuccess<ProjectType>
): GetProjectActionSuccessType => {
  return {
    type: PROJECTS.GET_PROJECT_SUCCEEDED,
    payload,
  };
};

export const getProjectActionError = (payload: ErrorCodes): GetProjectActionErrorType => {
  return {
    type: PROJECTS.GET_PROJECT_FAILED,
    payload,
  };
};
