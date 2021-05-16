import {
  LoginReqBody,
  LoginResponseData,
  RegisterReqBody,
  RegisterResponseData,
  ResponseSuccess,
} from 'types/interfaces';

import { API_URL, fetchApi } from '.';

const ENDPOINT_PREFIX = '/auth';

interface AuthApiHandlersTypes {
  register: (data: RegisterReqBody) => Promise<ResponseSuccess<RegisterResponseData>>;
  login: (data: LoginReqBody) => Promise<ResponseSuccess<LoginResponseData>>;
}

const authApi: AuthApiHandlersTypes = {
  register: async (data) =>
    fetchApi<RegisterResponseData>(`${API_URL}${ENDPOINT_PREFIX}/register`, 'POST', data),
  login: async (data) =>
    fetchApi<LoginResponseData>(`${API_URL}${ENDPOINT_PREFIX}/login`, 'POST', data),
};

export default authApi;
