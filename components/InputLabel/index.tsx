import { memo } from 'react';

import { Label } from './styles';

const InputLabel: React.FC<{ label?: string }> = ({ label }) => {
  return <Label>{label && label}</Label>;
};

export default memo(InputLabel);
