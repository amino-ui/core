import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { CardProps } from '../components/Card';
import { DangerZone } from '../components/DangerZone';

const DangerZoneMeta: Meta = {
  title: 'Amino/DangerZone',
  component: DangerZone,
};

export default DangerZoneMeta;

const Template: Story<CardProps> = ({
  label,
  children,
  actions,
  footerActions,
}: CardProps) => (
  <DangerZone label={label} actions={actions} footerActions={footerActions}>
    {children}
  </DangerZone>
);

export const BasicDangerZone = Template.bind({});
BasicDangerZone.args = {
  children: 'Danger zone contents',
  label: 'My danger zone',
};
