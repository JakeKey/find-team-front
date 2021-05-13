import { memo } from 'react';

import { Error } from './styles';

const InputError: React.FC<{ error?: string | boolean }> = ({ error }) => {
  return <Error>{error && error}</Error>;
};

export default memo(InputError);
