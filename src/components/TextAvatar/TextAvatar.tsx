import React from 'react';
import styled from 'styled-components';

const GradientSquare = styled.div<{
  gradientStart: string;
  gradientEnd: string;
}>`
  width: 32px;
  height: 32px;
  border-radius: var(--amino-radius);
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  color: var(--amino-gray-900) !important;
  font-weight: 500;

  --gradient-start: ${p => p.gradientStart};
  --gradient-end: ${p => p.gradientEnd};

  background: linear-gradient(
    137deg,
    var(--gradient-start),
    var(--gradient-end)
  );
`;

export type TextAvatarProps = {
  label: string;
};

const colorForString = (stringInput: string, brightness: number) => {
  const stringUniqueHash = Array.from(stringInput).reduce((acc, char) => {
    // eslint-disable-next-line no-bitwise
    return char.charCodeAt(0) + ((acc << 5) - acc);
  }, 0);

  return `hsl(${stringUniqueHash % 360}, 95%, ${brightness}%)`;
};

export const TextAvatar = ({ label }: TextAvatarProps) => (
  <GradientSquare
    gradientStart={colorForString(label || 'default label', 75)}
    gradientEnd={colorForString(
      (label && label.split('').reverse().join('')) || 'default label',
      30
    )}
  >
    {(label && label[0].toUpperCase()) || 'D'}
  </GradientSquare>
);
