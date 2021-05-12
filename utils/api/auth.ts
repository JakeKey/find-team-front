import { RegisterReqBody, RegisterResponse } from 'types/interfaces';

import { API_URL, fetchApi } from '.';

const ENDPOINT_PREFIX = '/auth';

export default {
  register: async (data: RegisterReqBody): Promise<RegisterResponse> =>
    fetchApi<RegisterResponse>(`${API_URL}${ENDPOINT_PREFIX}/register`, 'POST', data),
};
