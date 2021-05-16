import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { DASHBOARD_ROUTE, LOGIN_ROUTE } from 'utils/constants';

const useAuth = (redirectToDashboard?: boolean, redirectToLogin?: boolean): void => {
  const { push } = useRouter();

  const isLoggedIn = !!global.localStorage?.getItem('token');

  useEffect(() => {
    if ((!redirectToDashboard || redirectToLogin) && !isLoggedIn) {
      push(LOGIN_ROUTE);
    } else if (redirectToDashboard && isLoggedIn) {
      push(DASHBOARD_ROUTE);
    }
  }, [push, redirectToDashboard, redirectToLogin, isLoggedIn]);
};

export default useAuth;
