import React from 'react';

import { IconBase } from 'icons';
import { IconProps } from 'types';

export const ReportsIcon = ({ size, color }: IconProps) => (
  <IconBase size={size} color={color}>
    <mask id="a" fill="#fff">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.25 5.75c0-.41421.33579-.75.75-.75s.75.33579.75.75v4.5c0 .4142-.33579.75-.75.75s-.75-.3358-.75-.75v-4.5zM5 8.75c0-.41421.33579-.75.75-.75s.75.33579.75.75v1.5c0 .4142-.33579.75-.75.75S5 10.6642 5 10.25v-1.5zm6-1.5c0-.41421-.3358-.75-.75-.75-.41421 0-.75.33579-.75.75v3c0 .4142.33579.75.75.75.4142 0 .75-.3358.75-.75v-3z"
      />
    </mask>
    <path
      d="M10.25 10.25v-4.5h-3v4.5h3zm-4.5-4.5v4.5h3v-4.5h-3zM8 10.25v-1.5H5v1.5h3zm-4.5-1.5v1.5h3v-1.5h-3zm7.5 1.5v-3H8v3h3zm-1.5-3v3h3v-3h-3zm.75 5.25c1.2426 0 2.25-1.0074 2.25-2.25h-3c0-.41421.33579-.75.75-.75v3zM8 10.25c0 1.2426 1.00736 2.25 2.25 2.25v-3c.4142 0 .75.33579.75.75H8zM10.25 8c-.41421 0-.75-.33579-.75-.75h3C12.5 6.00736 11.4926 5 10.25 5v3zm0-3C9.00736 5 8 6.00736 8 7.25h3c0 .41421-.3358.75-.75.75V5zm-4.5 4.5c.41421 0 .75.33579.75.75h-3c0 1.2426 1.00736 2.25 2.25 2.25v-3zm-.75.75c0-.41421.33579-.75.75-.75v3C6.99264 12.5 8 11.4926 8 10.25H5zm.75-3.75C4.50736 6.5 3.5 7.50736 3.5 8.75h3c0 .41421-.33579.75-.75.75v-3zm0 3c-.41421 0-.75-.33579-.75-.75h3C8 7.50736 6.99264 6.5 5.75 6.5v3zM8 9.5c.41421 0 .75.33579.75.75h-3c0 1.2426 1.00736 2.25 2.25 2.25v-3zm-.75.75c0-.41421.33579-.75.75-.75v3c1.24264 0 2.25-1.0074 2.25-2.25h-3zM8 3.5c-1.24264 0-2.25 1.00736-2.25 2.25h3c0 .41421-.33579.75-.75.75v-3zm0 3c-.41421 0-.75-.33579-.75-.75h3C10.25 4.50736 9.24264 3.5 8 3.5v3z"
      fill="currentColor"
      mask="url(#a)"
    />
    <rect
      x="3"
      y="3"
      width="10"
      height="10"
      rx="1"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconBase>
);
