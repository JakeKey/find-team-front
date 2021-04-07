import { memo } from 'react';

import { Wrapper, StyledField, Error, Label } from './styles';

type Props = {
  name: string;
  placeholder?: string;
  error?: string;
  label?: string;
  type?: string;
};

const InputText: React.FC<Props> = ({ name, type = 'text', error, label, placeholder }) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <StyledField name={name} type={type} placeholder={placeholder} />
      <Error>{error}</Error>
    </Wrapper>
  );
};

export default memo(InputText);
