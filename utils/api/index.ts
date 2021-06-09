import { UserPositions } from 'types/enums';
import { ResponseModel, ResponseSuccess } from 'types/interfaces';
import { getQueryStringFromObject } from 'utils/helpers';

import auth from './auth';
import profile from './profile';
import projects from './projects';

export const API_URL = process.env.NEXT_PUBLIC_API_URL || '/api';
export const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '';

type FetchMethods = 'GET' | 'POST' | 'PUT' | 'DELETE';

export const fetchApi = async <T>(
  url: string,
  method: FetchMethods = 'GET',
  dataReq?: {
    body?: Record<string, unknown>;
    query?: Record<string, string | number | UserPositions>;
  }
): Promise<ResponseSuccess<T>> => {
  const token = global.localStorage?.getItem('token');

  const response = await fetch(`${url}${getQueryStringFromObject(dataReq?.query)}`, {
    method,
    body: JSON.stringify(dataReq?.body),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  const { data, error, success }: ResponseModel<T> = await response.json();
  if (error) throw new Error(error);
  return { data, success };
};

export default {
  auth,
  profile,
  projects,
};
