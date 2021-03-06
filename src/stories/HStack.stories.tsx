import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { withDesign } from 'storybook-addon-designs';

import { HStack, HStackProps } from '../components/Stack';
import { Button } from '../components/Button';
import { Card } from '../components/Card';

const HStackMeta: Meta = {
  title: 'Amino/HStack',
  component: HStack,
  decorators: [withDesign],
};

export default HStackMeta;

const Template: Story<HStackProps> = ({
  alignment,
  children,
  spacing,
}: HStackProps) => (
  <HStack alignment={alignment} spacing={spacing}>
    {children}
  </HStack>
);

export const CardHStack = Template.bind({});
CardHStack.args = {
  children: (
    <>
      <Card footerActions={<Button>action</Button>}>
        <div>one</div>
      </Card>
      <Card footerContent={<Button>action 2</Button>}>
        <div>two</div>
        <div>two</div>
      </Card>
    </>
  ),
};
CardHStack.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=79%3A28',
  },
};
