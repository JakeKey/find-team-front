import { useEffect } from 'react';
import { useRouter } from 'next/router';

import useToastCustom from 'hooks/useToastCustom';
import { DASHBOARD_ROUTE, LOGIN_ROUTE } from 'utils/constants';
import { checkIfTokenExists } from 'utils/helpers';
import { useAppDispatch, useAppSelector } from 'store';
import { profileSelectors } from 'store/selectors';
import { getProfileAction, unsetProfileStatesAction } from 'store/actions';

const useAuth = ({
  redirectToDashboard = false,
  redirectToLogin = false,
}: {
  redirectToDashboard?: boolean;
  redirectToLogin?: boolean;
}): void => {
  const { push } = useRouter();

  const dispatch = useAppDispatch();
  const { profile, error, success, isLoading } = useAppSelector(
    profileSelectors.selectProfileState
  );
  useToastCustom({
    unsetAction: unsetProfileStatesAction,
    error,
    success,
    showSuccess: false,
  });

  const token = checkIfTokenExists();
  const isLoggedIn = !!profile && token;

  useEffect(() => {
    const getProfile = (): void => {
      dispatch(getProfileAction());
    };

    if (isLoading) return;
    if (token && !profile) {
      getProfile();
      return;
    }
    if (redirectToLogin && !isLoggedIn) {
      push(LOGIN_ROUTE);
    } else if (redirectToDashboard && isLoggedIn) {
      push(DASHBOARD_ROUTE);
    }
  }, [push, redirectToDashboard, redirectToLogin, isLoggedIn, token, profile, isLoading, dispatch]);
};

export default useAuth;
