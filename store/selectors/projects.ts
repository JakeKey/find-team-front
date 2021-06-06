import { RootState } from 'store';
import { ProjectsStateType } from 'store/reducers/projects';
import { GetAllProjectsResponseData } from 'types/interfaces';

const REDUCER_PREFIX = 'projects';

const selectProjectsState = (state: RootState): ProjectsStateType => state[REDUCER_PREFIX];
const selectProjectsList = (state: RootState): GetAllProjectsResponseData[] =>
  state[REDUCER_PREFIX].projects;

export const projectsSelectors = {
  selectProjectsState,
  selectProjectsList,
};
