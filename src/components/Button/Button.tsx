import React, { ReactNode } from 'react';
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';

import { Spinner } from 'components/Spinner';
import { Intent } from 'types';

const AminoButton = styled.button`
  position: relative;
  outline: none;
  border: var(--amino-border-transparent);
  height: var(--amino-input-height);
  line-height: var(--amino-input-height);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 var(--amino-space);
  border-radius: var(--amino-radius);
  transition: var(--amino-transition);
  box-shadow: var(--amino-border-shadow-sm);
  font-weight: 500;
  user-select: none;
  font-family: var(--amino-font-sans);
  letter-spacing: normal;
  border: 0;

  /* should we use active or focus or both? */
  &:active,
  &:focus {
    outline: none;
    box-shadow: var(--amino-glow-blue);
  }

  &[disabled] {
    cursor: not-allowed;
    pointer-events: none;
    box-shadow: none;
    opacity: 0.5;
  }
`;

const Primary = styled(AminoButton)`
  background: var(--amino-primary);
  color: var(--amino-text-light);

  &:hover {
    background: var(--amino-blue-600);
  }
`;

const Secondary = styled(AminoButton)`
  color: var(--amino-text-color);
  background: var(--amino-input-background);

  &:hover {
    background: var(--amino-hover-color);
  }
`;

const Icon = styled(AminoButton)`
  background: var(--amino-input-background);
  color: var(--amino-text-color);
  padding: 0 var(--amino-space-half);

  svg {
    width: 16px;
    height: 16px;
    fill: currentColor;
    color: var(--amino-text-color);
  }

  &:hover {
    background: var(--amino-hover-color);
  }
`;

const Danger = styled(AminoButton)`
  background: var(--amino-red-500);
  color: white;

  &:hover {
    background: var(--amino-red-600);
  }

  &:active,
  &:focus {
    box-shadow: var(--amino-glow-red);
  }
`;

export type ButtonProps = {
  intent?: Intent;
  loading?: boolean;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
  loadingText?: string;
  tabIndex?: number;
  tooltip?: ReactNode;
  children: ReactNode;
};

export const Button = ({
  disabled,
  intent,
  loading,
  onClick,
  className,
  loadingText,
  tabIndex,
  tooltip,
  children,
}: ButtonProps) => {
  const content = loading ? (
    <>
      <Spinner size={16} />
      {loadingText}
    </>
  ) : (
    <>
      {tooltip && <ReactTooltip />}
      {children}
    </>
  );

  if (disabled || loading) {
    return <Secondary disabled>{content}</Secondary>;
  }

  const buttonProps = {
    onClick,
    className,
    'data-tip': tooltip,
    tabIndex,
  };

  switch (intent) {
    case 'primary':
      return <Primary {...buttonProps}>{content}</Primary>;
    case 'danger':
      return <Danger {...buttonProps}>{content}</Danger>;
    case 'icon':
      return <Icon {...buttonProps}>{content}</Icon>;
    case 'secondary':
    default:
      return <Secondary {...buttonProps}>{content}</Secondary>;
  }
};
