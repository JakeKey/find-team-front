import {
  CreateProjectReqBody,
  CreateProjectResponseData,
  GetProjectResponseData,
  GetProjectByIdQueryParams,
  ResponseSuccess,
} from 'types/interfaces';

import { API_URL, fetchApi } from '.';

const ENDPOINT_PREFIX = '/projects';

interface ProjectsApiHandlersTypes {
  get: (data: GetProjectByIdQueryParams) => Promise<ResponseSuccess<GetProjectResponseData>>;
  create: (data: CreateProjectReqBody) => Promise<ResponseSuccess<CreateProjectResponseData>>;
}

const projectsApi: ProjectsApiHandlersTypes = {
  get: async (data) =>
    fetchApi<GetProjectResponseData>(`${API_URL}${ENDPOINT_PREFIX}`, 'GET', { query: data }),
  create: async (data) =>
    fetchApi<CreateProjectResponseData>(`${API_URL}${ENDPOINT_PREFIX}`, 'POST', { body: data }),
};

export default projectsApi;
