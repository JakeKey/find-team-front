import { authReducer } from './auth';
import { profileReducer } from './profile';
import { projectsReducer } from './projects';

export default {
  auth: authReducer,
  profile: profileReducer,
  projects: projectsReducer,
};
