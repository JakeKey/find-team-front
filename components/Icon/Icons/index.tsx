import React, { CSSProperties } from 'react';

export interface IconProps {
  color: string;
  width: string;
  height: string;
  alt?: string;
  src?: string;
  style?: CSSProperties;
  onClick?: () => void;
}

export const ImgIcon: React.FC<IconProps> = ({ ...props }) => <img {...props} />;
