import { memo } from 'react';

import InputError from 'components/InputError';
import InputLabel from 'components/InputLabel';

import { Wrapper, StyledSelect, StyledSelectField } from './styles';

export interface OptionType<T = string> {
  value: T;
  name: string;
}

type Props = {
  name?: string;
  options: OptionType[];
  placeholder?: string;
  error?: string | boolean;
  label?: string;
  asField?: boolean;
  onChange?: (value: string) => void;
  sort?: boolean;
};

const Select: React.FC<Props> = ({
  name,
  options,
  error,
  label,
  placeholder = '----------------',
  asField = true,
  onChange,
}) => {
  return (
    <Wrapper>
      <InputLabel label={label} />
      {asField ? (
        <StyledSelectField component="select" name={name}>
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option value={option.value} key={option.value}>
              {option.name}
            </option>
          ))}
        </StyledSelectField>
      ) : (
        <StyledSelect onChange={({ target }) => onChange && onChange(target.value)}>
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option value={option.value} key={option.value}>
              {option.name}
            </option>
          ))}
        </StyledSelect>
      )}
      <InputError error={error} />
    </Wrapper>
  );
};

export default memo(Select);
