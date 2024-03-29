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
  onChange?: ChangeEventHandler<HTMLInputElement>;
  is?: 'textarea';
  darkLabel?: boolean;
};

const InputText: React.FC<Props> = ({
  name,
  type = 'text',
  error,
  label,
  placeholder,
  mask,
  value,
  onChange,
  is,
  darkLabel = true,
}) => {
  return (
    <Wrapper>
      <InputLabel label={label} dark={darkLabel} />
      {mask ? (
        <StyledMask
          name={name}
          mask={mask}
          value={value}
          type={type}
          onChange={onChange}
          placeholder={placeholder}
        />
      ) : is ? (
        <StyledField name={name} placeholder={placeholder} component={is} rows={5} />
      ) : (
        <StyledField name={name} type={type} placeholder={placeholder} />
      )}
      <InputError error={error} />
    </Wrapper>
  );
};

export default memo(InputText);
