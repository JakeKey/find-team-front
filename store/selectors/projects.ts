import { RootState } from 'store';
import { ProjectsStateType } from 'store/reducers/projects';
import { GetAllProjectsResponseData, GetProjectResponseData } from 'types/interfaces';

const REDUCER_PREFIX = 'projects';

const selectProjectsState = (state: RootState): ProjectsStateType => state[REDUCER_PREFIX];
const selectProjectDetails = (state: RootState): GetProjectResponseData | undefined =>
  state[REDUCER_PREFIX].projectDetails;
const selectProjectsList = (state: RootState): GetAllProjectsResponseData[] =>
  state[REDUCER_PREFIX].projects;

export const projectsSelectors = {
  selectProjectsState,
  selectProjectsList,
  selectProjectDetails,
};
