import { ResponseSuccess, GetProfileResponseData } from 'types/interfaces';

import { API_URL, fetchApi } from '.';

const ENDPOINT_PREFIX = '/profile';

interface ProfileApiHandlersTypes {
  get: () => Promise<ResponseSuccess<GetProfileResponseData>>;
}

const projectsApi: ProfileApiHandlersTypes = {
  get: async () => fetchApi<GetProfileResponseData>(`${API_URL}${ENDPOINT_PREFIX}`, 'GET'),
};

export default projectsApi;
