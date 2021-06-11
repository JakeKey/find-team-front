import { useEffect } from 'react';
import { toast } from 'react-toastify';

import { useAppDispatch } from 'store';
import {
  UnsetAuthStatesActionType,
  UnsetProfileStatesActionType,
  UnsetProjectsStatesActionType,
} from 'store/actions';
import { ErrorCodes, SuccessCodes } from 'types/enums';

import useTranslationPrefix from './useTranslationPrefix';

const useToastCustom = ({
  error,
  success,
  unsetAction,
  showSuccess = true,
}: {
  error?: ErrorCodes;
  success?: SuccessCodes;
  showSuccess?: boolean;
  unsetAction: () =>
    | UnsetAuthStatesActionType
    | UnsetProfileStatesActionType
    | UnsetProjectsStatesActionType;
}): void => {
  const CODE_PREFIX = 'Codes';
  const tc = useTranslationPrefix(CODE_PREFIX);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (error) {
      const msg = tc(error);
      if (msg !== `${CODE_PREFIX}.${error}`) toast.error(msg);
      dispatch(unsetAction());
    }
  }, [error, dispatch, tc, unsetAction]);

  useEffect(() => {
    if (success) {
      const msg = tc(success);
      if (showSuccess && msg !== `${CODE_PREFIX}.${success}`) toast.success(msg);
      dispatch(unsetAction());
    }
  }, [success, dispatch, tc, unsetAction, showSuccess]);
};

export default useToastCustom;
