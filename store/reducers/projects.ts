import { ProjectsActionTypes, PROJECTS } from 'store/actions';
import {
  BasicStateType,
  GetAllProjectsResponseData,
  GetProjectResponseData,
} from 'types/interfaces';
import { PROJECTS_LIST_LIMIT } from 'utils/constants';

export interface ProjectsStateType extends BasicStateType {
  projects: GetAllProjectsResponseData[];
  projectDetails?: GetProjectResponseData;
  hasMore: boolean;
  createdProjectId?: number;
}

export const INITIAL_STATE_PROJECTS: ProjectsStateType = {
  isLoading: false,
  projects: [],
  hasMore: true,
};

export const projectsReducer = (
  state = INITIAL_STATE_PROJECTS,
  action: ProjectsActionTypes
): ProjectsStateType => {
  switch (action.type) {
    case PROJECTS.CREATE_PROJECT_REQUESTED:
      return {
        ...state,
        isLoading: true,
      };
    case PROJECTS.CREATE_PROJECT_SUCCEEDED:
      return {
        ...state,
        isLoading: false,
        success: action.payload.success,
        createdProjectId: action.payload.data?.id,
        error: undefined,
      };
    case PROJECTS.CREATE_PROJECT_FAILED:
      return {
        ...state,
        isLoading: false,
        success: undefined,
        error: action.payload,
      };
    case PROJECTS.GET_PROJECT_REQUESTED:
      return {
        ...state,
        isLoading: true,
      };
    case PROJECTS.GET_PROJECT_SUCCEEDED:
      return {
        ...state,
        isLoading: false,
        success: action.payload.success,
        projectDetails: action.payload.data,
        error: undefined,
      };
    case PROJECTS.GET_PROJECT_FAILED:
      return {
        ...state,
        isLoading: false,
        success: undefined,
        error: action.payload,
      };
    case PROJECTS.GET_ALL_PROJECTS_REQUESTED:
      return {
        ...state,
        isLoading: true,
      };
    case PROJECTS.GET_ALL_PROJECTS_SUCCEEDED:
      return {
        ...state,
        isLoading: false,
        success: action.payload.success,
        projects: action.payload.data.page
          ? [...state.projects, ...action.payload.data.projects]
          : action.payload.data.projects,
        error: undefined,
        hasMore: action.payload.data.projects.length === PROJECTS_LIST_LIMIT,
      };
    case PROJECTS.GET_ALL_PROJECTS_FAILED:
      return {
        ...state,
        isLoading: false,
        success: undefined,
        error: action.payload,
      };
    case PROJECTS.UNSET_PROJECTS_STATES_REQUESTED:
      return {
        ...state,
      };
    case PROJECTS.UNSET_PROJECTS_STATES_DONE:
      return {
        ...state,
        success: undefined,
        error: undefined,
      };
    default:
      return state;
  }
};
