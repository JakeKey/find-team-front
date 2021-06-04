import { memo, useState } from 'react';

import PositionField from 'components/PositionField';
import Select, { OptionType } from 'components/Select';

import useTranslationPrefix from 'hooks/useTranslationPrefix';
import { UserPositions } from 'types/enums';
import { PositionType } from 'types/interfaces';

import { PositionsWrapper, PositionsContainer } from './styles';

interface PositionsProps {
  isEditMode: boolean;
  positions?: PositionType[];
  setPositions?: (positions: PositionType[]) => void;
}

const getInitialPositionsOptions = (
  tg: (key: string) => string,
  positions?: PositionType[]
): OptionType<UserPositions>[] => {
  const usedPositions = positions?.map(({ position }) => position);
  const filteredPositions = Object.values(UserPositions).filter(
    (position) => !usedPositions?.includes(position)
  );

  return filteredPositions.map((position) => ({
    value: position,
    name: tg(position),
  }));
};

const Positions: React.FC<PositionsProps> = ({ isEditMode, setPositions, positions }) => {
  const t = useTranslationPrefix('Projects');
  const tg = useTranslationPrefix('General');

  const [positionOptions, setPositionOptions] = useState<OptionType<UserPositions>[]>(
    getInitialPositionsOptions(tg, positions)
  );

  const onDecrement = (positionToDecrement: UserPositions): void => {
    if (!positions || !setPositions) return;
    const positionsToChange = positions ? [...positions] : [];
    const positionIndex = positions
      ? positions.findIndex(({ position }) => position === positionToDecrement)
      : -1;

    if (positions[positionIndex].count < 2) {
      setPositionOptions([
        ...positionOptions,
        { value: positionToDecrement, name: tg(positionToDecrement) },
      ]);
      positionsToChange.splice(positionIndex, 1);
    } else {
      positionsToChange.splice(positionIndex, 1, {
        position: positionToDecrement,
        count: positionsToChange[positionIndex].count - 1,
      });
    }

    setPositions(positionsToChange);
  };

  const onIncrement = (positionToIncrement: UserPositions): void => {
    if (!setPositions) return;
    const positionIndex = positions
      ? positions.findIndex(({ position }) => position === positionToIncrement)
      : -1;
    const positionsToChange = positions ? [...positions] : [];

    if (positionIndex === -1) {
      setPositionOptions(positionOptions.filter(({ value }) => value !== positionToIncrement));
      positionsToChange.push({ position: positionToIncrement, count: 1 });
    } else {
      positionsToChange.splice(positionIndex, 1, {
        position: positionToIncrement,
        count: positionsToChange[positionIndex].count + 1,
      });
    }

    setPositions(positionsToChange);
  };

  const onSelectChange = (positionSelected: string): void => {
    const castedPosition = positionSelected as UserPositions;
    if (Object.values(UserPositions).includes(castedPosition)) onIncrement(castedPosition);
  };

  return (
    <PositionsWrapper>
      <PositionsContainer>
        <div>{t('positions_needed')}</div>
        {positions?.map(({ position, count }) => (
          <PositionField
            key={position}
            positionTranslation={tg(position)}
            position={position}
            count={count}
            onDecrement={onDecrement}
            onIncrement={onIncrement}
            isEditMode={isEditMode}
          />
        ))}
        {!!positionOptions.length && isEditMode && (
          <Select options={[...positionOptions]} asField={false} onChange={onSelectChange} />
        )}
      </PositionsContainer>
    </PositionsWrapper>
  );
};

export default memo(Positions);
