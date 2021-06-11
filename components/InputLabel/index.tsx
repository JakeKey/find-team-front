import { memo } from 'react';

import { Label } from './styles';

const InputLabel: React.FC<{ label?: string; dark?: boolean }> = ({ label, dark }) => {
  return <Label dark={dark}>{label && label}</Label>;
};

export default memo(InputLabel);
