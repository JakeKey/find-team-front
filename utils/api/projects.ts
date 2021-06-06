import {
  CreateProjectReqBody,
  CreateProjectResponseData,
  GetProjectResponseData,
  GetProjectByIdParams,
  ResponseSuccess,
  GetProjectsAllQueryParams,
  GetAllProjectsResponseData,
} from 'types/interfaces';

import { API_URL, fetchApi } from '.';

const ENDPOINT_PREFIX = '/projects';

interface ProjectsApiHandlersTypes {
  get: (data: GetProjectByIdParams) => Promise<ResponseSuccess<GetProjectResponseData>>;
  getAll: (
    data: GetProjectsAllQueryParams
  ) => Promise<ResponseSuccess<GetAllProjectsResponseData[]>>;
  create: (data: CreateProjectReqBody) => Promise<ResponseSuccess<CreateProjectResponseData>>;
}

const projectsApi: ProjectsApiHandlersTypes = {
  get: async (id) => fetchApi<GetProjectResponseData>(`${API_URL}${ENDPOINT_PREFIX}/${id}`, 'GET'),
  getAll: async (data) =>
    fetchApi<GetAllProjectsResponseData[]>(`${API_URL}${ENDPOINT_PREFIX}`, 'GET', {
      query: { ...data },
    }),
  create: async (data) =>
    fetchApi<CreateProjectResponseData>(`${API_URL}${ENDPOINT_PREFIX}`, 'POST', { body: data }),
};

export default projectsApi;
