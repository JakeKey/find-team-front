import { ResponseModel } from 'types/interfaces';

import auth from './auth';

export const API_URL = process.env.NEXT_PUBLIC_API_URL || '/api';
export const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '';

type FetchMethods = 'GET' | 'POST' | 'PUT' | 'DELETE';

export const fetchApi = async <T>(
  url: string,
  method: FetchMethods = 'GET',
  body?: Record<string, unknown>
): Promise<T> => {
  const response = await fetch(url, {
    method,
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

  const { data, error }: ResponseModel<T> = await response.json();
  if (error) throw new Error(error);
  return data;
};

export default {
  auth,
};
