import { Field } from 'formik';

import { Wrapper } from './styles';

type Props = {
  name: string;
  placeholder?: string;
  error?: string;
  type?: string;
};

const InputText: React.FC<Props> = ({ name, type = 'text', placeholder }) => {
  return (
    <Wrapper>
      <Field name={name} type={type} placeholder={placeholder} />
    </Wrapper>
  );
};

export default InputText;
