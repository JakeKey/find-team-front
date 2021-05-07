import auth from './auth';

export const API_URL = process.env.NEXT_PUBLIC_API_URL || '/api';
export const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '';

export default {
  auth,
};
