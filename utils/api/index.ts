import auth from './auth';

export const API_URL = process.env.NEXT_PUBLIC_API_URL || '/api';

export default {
  auth,
};
