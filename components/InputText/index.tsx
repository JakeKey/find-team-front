import { ChangeEventHandler, memo } from 'react';

import InputError from 'components/InputError';
import InputLabel from 'components/InputLabel';

import { Wrapper, StyledField, StyledMask } from './styles';

type Props = {
  name: string;
  placeholder?: string;
  error?: string | boolean;
  label?: string;
  type?: string;
  mask?: string;
  value?: string;
  handleChange?: ChangeEventHandler<HTMLInputElement>;
};

const InputText: React.FC<Props> = ({
  name,
  type = 'text',
  error,
  label,
  placeholder,
  mask,
  value,
  handleChange,
}) => {
  return (
    <Wrapper>
      <InputLabel label={label} />
      {mask ? (
        <StyledMask
          name={name}
          mask={mask}
          value={value}
          type={type}
          onChange={handleChange}
          placeholder={placeholder}
        />
      ) : (
        <StyledField name={name} type={type} placeholder={placeholder} />
      )}
      <InputError error={error} />
    </Wrapper>
  );
};

export default memo(InputText);
