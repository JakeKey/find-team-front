import { memo } from 'react';

import { UserType } from 'types/interfaces';
import { UserPositions } from 'types/enums';

import { Wrapper, StyledSigns } from './styles';

interface Props {
  isEditMode: boolean;
  positionTranslation: string;
  quantity: number;
  onDecrement: (position: UserPositions) => void;
  onIncrement: (position: UserPositions) => void;
}

const PositionField: React.FC<Props & Required<Pick<UserType, 'position'>>> = ({
  positionTranslation,
  position,
  quantity,
  onDecrement,
  onIncrement,
  isEditMode,
}) => {
  return (
    <Wrapper>
      <span>{positionTranslation} </span>
      <span>
        {isEditMode && (
          <StyledSigns type="minus" color="red" onClick={() => onDecrement(position)} />
        )}
        {quantity}
        {isEditMode && (
          <StyledSigns type="plus" color="green" onClick={() => onIncrement(position)} />
        )}
      </span>
    </Wrapper>
  );
};

export default memo(PositionField);
