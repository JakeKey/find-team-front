import { ErrorCodes } from 'types/enums';
import {
  Action,
  CreateProjectReqBody,
  GetAllProjectsResponseData,
  GetProjectByIdParams,
  GetProjectsAllQueryParams,
  GetProjectResponseData,
  ResponseSuccess,
  CreateProjectResponseData,
} from 'types/interfaces';

export enum PROJECTS {
  CREATE_PROJECT_REQUESTED = 'CREATE_PROJECT_REQUESTED',
  CREATE_PROJECT_SUCCEEDED = 'CREATE_PROJECT_SUCCEEDED',
  CREATE_PROJECT_FAILED = 'CREATE_PROJECT_FAILED',
  GET_PROJECT_REQUESTED = 'GET_PROJECT_REQUESTED',
  GET_PROJECT_SUCCEEDED = 'GET_PROJECT_SUCCEEDED',
  GET_PROJECT_FAILED = 'GET_PROJECT_FAILED',
  GET_ALL_PROJECTS_REQUESTED = 'GET_ALL_PROJECTS_REQUESTED',
  GET_ALL_PROJECTS_SUCCEEDED = 'GET_ALL_PROJECTS_SUCCEEDED',
  GET_ALL_PROJECTS_FAILED = 'GET_ALL_PROJECTS_FAILED',
  UNSET_PROJECTS_STATES_REQUESTED = 'UNSET_PROJECTS_STATES_REQUESTED',
  UNSET_PROJECTS_STATES_DONE = 'UNSET_PROJECTS_STATES_DONE',
}

export type ProjectsActionTypes =
  | CreateProjectActionType
  | CreateProjectActionSuccessType
  | CreateProjectActionErrorType
  | GetProjectActionType
  | GetProjectActionSuccessType
  | GetProjectActionErrorType
  | GetAllProjectsActionType
  | GetAllProjectsActionSuccessType
  | GetAllProjectsActionErrorType
  | UnsetProjectsStatesActionType
  | UnsetProjectsStatesActionDoneType;

export type CreateProjectActionType = Required<
  Action<PROJECTS.CREATE_PROJECT_REQUESTED, CreateProjectReqBody>
>;
export type CreateProjectActionSuccessType = Required<
  Action<PROJECTS.CREATE_PROJECT_SUCCEEDED, ResponseSuccess<CreateProjectResponseData>>
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
  payload: ResponseSuccess<CreateProjectResponseData>
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
  Action<PROJECTS.GET_PROJECT_REQUESTED, GetProjectByIdParams>
>;
export type GetProjectActionSuccessType = Required<
  Action<PROJECTS.GET_PROJECT_SUCCEEDED, ResponseSuccess<GetProjectResponseData>>
>;
export type GetProjectActionErrorType = Required<Action<PROJECTS.GET_PROJECT_FAILED, ErrorCodes>>;

export const getProjectAction = (payload: GetProjectByIdParams): GetProjectActionType => {
  return {
    type: PROJECTS.GET_PROJECT_REQUESTED,
    payload,
  };
};

export const getProjectActionSuccess = (
  payload: ResponseSuccess<GetProjectResponseData>
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

interface GetAllProjectsActionSuccessPayloadType {
  projects: GetAllProjectsResponseData[];
  page: number;
}

export type GetAllProjectsActionType = Required<
  Action<PROJECTS.GET_ALL_PROJECTS_REQUESTED, GetProjectsAllQueryParams>
>;
export type GetAllProjectsActionSuccessType = Required<
  Action<
    PROJECTS.GET_ALL_PROJECTS_SUCCEEDED,
    ResponseSuccess<GetAllProjectsActionSuccessPayloadType>
  >
>;
export type GetAllProjectsActionErrorType = Required<
  Action<PROJECTS.GET_ALL_PROJECTS_FAILED, ErrorCodes>
>;

export const getAllProjectsAction = (
  payload: GetProjectsAllQueryParams
): GetAllProjectsActionType => {
  return {
    type: PROJECTS.GET_ALL_PROJECTS_REQUESTED,
    payload,
  };
};

export const getAllProjectsActionSuccess = (
  payload: ResponseSuccess<GetAllProjectsActionSuccessPayloadType>
): GetAllProjectsActionSuccessType => {
  return {
    type: PROJECTS.GET_ALL_PROJECTS_SUCCEEDED,
    payload,
  };
};

export const getAllProjectsActionError = (payload: ErrorCodes): GetAllProjectsActionErrorType => {
  return {
    type: PROJECTS.GET_ALL_PROJECTS_FAILED,
    payload,
  };
};

export type UnsetProjectsStatesActionType = Action<
  PROJECTS.UNSET_PROJECTS_STATES_REQUESTED,
  undefined
>;
export type UnsetProjectsStatesActionDoneType = Action<
  PROJECTS.UNSET_PROJECTS_STATES_DONE,
  undefined
>;

export const unsetProjectsStatesAction = (): UnsetProjectsStatesActionType => {
  return {
    type: PROJECTS.UNSET_PROJECTS_STATES_REQUESTED,
  };
};

export const unsetProjectsStatesActionDone = (): UnsetProjectsStatesActionDoneType => {
  return {
    type: PROJECTS.UNSET_PROJECTS_STATES_DONE,
  };
};
