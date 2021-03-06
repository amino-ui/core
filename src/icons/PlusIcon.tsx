import React from 'react';

import { IconBase } from 'icons';
import { IconProps } from 'types';

export const PlusIcon = ({ size, color }: IconProps) => (
  <IconBase size={size} color={color}>
    <path
      d="M8 3v10M3 8h10"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconBase>
);
