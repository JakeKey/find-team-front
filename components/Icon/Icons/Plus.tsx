import React from 'react';

import { IconProps } from '.';

const Plus: React.FC<IconProps> = ({ color, width, height, ...props }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill={color} {...props}>
    <path d="M4,8H8V4A2,2 0 0,1 10,2H14A2,2 0 0,1 16,4V8H20A2,2 0 0,1 22,10V14A2,2 0 0,1 20,16H16V20A2,2 0 0,1 14,22H10A2,2 0 0,1 8,20V16H4A2,2 0 0,1 2,14V10A2,2 0 0,1 4,8Z" />
  </svg>
);

export default Plus;
