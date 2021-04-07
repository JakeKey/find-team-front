import { MouseEventHandler, memo } from 'react';
import { ButtonStyled } from './styles';

type Props = {
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
};

const Button: React.FC<Props> = ({ text, type = 'button', onClick }) => {
  return (
    <ButtonStyled type={type} onClick={onClick}>
      {text}
    </ButtonStyled>
  );
};

export default memo(Button);
