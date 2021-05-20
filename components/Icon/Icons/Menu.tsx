import React from 'react';

import { IconProps } from '.';

const Menu: React.FC<IconProps> = ({ color, width, height, ...props }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill={color} {...props}>
    <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
  </svg>
);

export default Menu;
