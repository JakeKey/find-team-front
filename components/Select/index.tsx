import { memo } from 'react';

import InputError from 'components/InputError';
import InputLabel from 'components/InputLabel';

import { Wrapper, StyledSelect } from './styles';

export interface OptionType {
  value: string;
  name: string;
}

type Props = {
  name: string;
  options: OptionType[];
  placeholder?: string;
  error?: string | boolean;
  label?: string;
};

const Select: React.FC<Props> = ({
  name,
  options,
  error,
  label,
  placeholder = '----------------',
}) => {
  return (
    <Wrapper>
      <InputLabel label={label} />
      <StyledSelect component="select" name={name}>
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.name}
          </option>
        ))}
      </StyledSelect>
      <InputError error={error} />
    </Wrapper>
  );
};

export default memo(Select);
