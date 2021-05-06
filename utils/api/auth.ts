import { RegisterArgsType } from 'types/interfaces';

import { API_URL } from '.';

const ENDPOINT_PREFIX = '/auth';

export default {
  // TODO specify response type
  register: async (data: RegisterArgsType): Promise<any> => {
    try {
      const response = await fetch(`${API_URL}${ENDPOINT_PREFIX}/register`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      if (response) return response;
    } catch (err) {
      console.log('err', err);
      return err;
    }
  },
};
