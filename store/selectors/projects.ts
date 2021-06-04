import { RootState } from 'store';
import { ProjectsStateType } from 'store/reducers/projects';

const REDUCER_PREFIX = 'projects';

const selectProjectsState = (state: RootState): ProjectsStateType => state[REDUCER_PREFIX];

export const projectsSelectors = {
  selectProjectsState,
};
