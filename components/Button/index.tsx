import { MouseEventHandler, memo } from 'react';

import { ButtonStyled } from './styles';

type Props = {
  text: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const Button: React.FC<Props> = ({ text, type = 'button', disabled, onClick }) => {
  return (
    <ButtonStyled type={type} onClick={onClick} disabled={disabled}>
      {text}
    </ButtonStyled>
  );
};

export default memo(Button);
