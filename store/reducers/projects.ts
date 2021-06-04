import { ProjectsActionTypes, PROJECTS } from 'store/actions';
import { BasicStateType, ProjectType } from 'types/interfaces';

export interface ProjectsStateType extends BasicStateType {
  projects: ProjectType[];
  projectDetails?: ProjectType;
}

export const INITIAL_STATE_PROJECTS: ProjectsStateType = {
  isLoading: false,
  projects: [],
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
        isLoading: true,
        success: action.payload,
        error: undefined,
      };
    case PROJECTS.CREATE_PROJECT_FAILED:
      return {
        ...state,
        isLoading: true,
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
        isLoading: true,
        success: action.payload.success,
        projectDetails: action.payload.data,
        error: undefined,
      };
    case PROJECTS.GET_PROJECT_FAILED:
      return {
        ...state,
        isLoading: true,
        success: undefined,
        error: action.payload,
      };
    default:
      return state;
  }
};
