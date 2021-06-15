import { useEffect, useState } from 'react';

import { ErrorCodes, SuccessCodes } from 'types/enums';

const useRequestState = ({
  error,
  success,
  callRequested,
}: {
  error?: ErrorCodes;
  success?: SuccessCodes;
  callRequested?: boolean;
}): { showError: boolean; showSuccess: boolean } => {
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (callRequested && success) {
      setShowSuccess(true);
    }
  }, [success, callRequested, setShowSuccess]);

  useEffect(() => {
    if (callRequested && error) {
      setShowError(true);
    }
  }, [error, callRequested, setShowError]);

  return { showError, showSuccess };
};

export default useRequestState;
