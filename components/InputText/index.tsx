import { Field } from 'formik';

import { Wrapper } from './styles';

type Props = {
  name: string;
  placeholder?: string;
  error?: string;
};

const InputText: React.FC<Props> = ({ name, placeholder }) => {
  return (
    <Wrapper>
      <Field name={name} placeholder={placeholder} />
    </Wrapper>
  );
};

export default InputText;
