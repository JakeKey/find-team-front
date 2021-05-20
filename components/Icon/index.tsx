import React from 'react';

import { colors } from 'styles';

import { IconProps } from './Icons';
import Power from './Icons/Power';
import Menu from './Icons/Menu';
import Account from './Icons/Account';

export type IconName = 'power' | 'menu' | 'account';

interface Props {
  type: IconName;
  onClick?: (event: React.MouseEvent<SVGElement>) => void;
  disabled?: boolean;
}

const ICON_SIZE = '22';

const Icon: React.FC<Props & Partial<IconProps>> = ({
  type,
  color = colors.black,
  width = ICON_SIZE,
  height = ICON_SIZE,
  disabled = false,
  ...props
}) => {
  const params = { width, height, color, disabled };

  return {
    power: <Power {...params} {...props} />,
    menu: <Menu {...params} {...props} />,
    account: <Account {...params} {...props} />,
  }[type];
};

export default Icon;
