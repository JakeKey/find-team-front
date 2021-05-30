import React from 'react';

import { IconProps } from '.';

const Minus: React.FC<IconProps> = ({ color, width, height, ...props }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill={color} {...props}>
    <path d="M20,14H4V10H20" />
  </svg>
);

export default Minus;
