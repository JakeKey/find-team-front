import {
  LoginReqBody,
  LoginResponseData,
  RegisterReqBody,
  RegisterResponseData,
  ResponseSuccess,
  VerifyCodeReqBody,
  VerifyCodeResponseData,
} from 'types/interfaces';

import { API_URL, fetchApi } from '.';

const ENDPOINT_PREFIX = '/auth';

interface AuthApiHandlersTypes {
  register: (data: RegisterReqBody) => Promise<ResponseSuccess<RegisterResponseData>>;
  login: (data: LoginReqBody) => Promise<ResponseSuccess<LoginResponseData>>;
  verify: (data: VerifyCodeReqBody) => Promise<ResponseSuccess<VerifyCodeResponseData>>;
}

const authApi: AuthApiHandlersTypes = {
  register: async (data) =>
    fetchApi<RegisterResponseData>(`${API_URL}${ENDPOINT_PREFIX}/register`, 'POST', { body: data }),
  login: async (data) =>
    fetchApi<LoginResponseData>(`${API_URL}${ENDPOINT_PREFIX}/login`, 'POST', { body: data }),
  verify: async (data) =>
    fetchApi<VerifyCodeResponseData>(`${API_URL}${ENDPOINT_PREFIX}/verify`, 'POST', { body: data }),
};

export default authApi;
