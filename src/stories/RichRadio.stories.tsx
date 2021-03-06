import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { withDesign } from 'storybook-addon-designs';

import { RichRadio, RichRadioProps } from '../components/RichRadio';

const RichRadioMeta: Meta = {
  title: 'Amino/RichRadio',
  component: RichRadio,
  decorators: [withDesign],
};

export default RichRadioMeta;

const Template: Story<RichRadioProps> = ({
  onChange,
  items,
  value,
  defaultValue,
}: RichRadioProps) => (
  <RichRadio
    defaultValue={defaultValue}
    value={value}
    onChange={onChange}
    items={items}
  />
);

export const BasicRichRadio = Template.bind({});
BasicRichRadio.args = {
  items: [
    {
      label: 'Item 1',
      subtitle: 'Item 1 subtitle',
      value: 'item1',
    },
    {
      label: 'Item 2',
      subtitle: 'Item 2 subtitle',
      value: 'item2',
    },
    {
      label: 'Item 3',
      subtitle: 'Item 3 subtitle',
      value: 'item3',
    },
  ],
};
BasicRichRadio.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=245%3A181',
  },
};

export const DefaultValueRichRadio = Template.bind({});
DefaultValueRichRadio.args = {
  items: [
    {
      label: 'Item 1',
      subtitle: 'Item 1 subtitle',
      value: 'item1',
    },
    {
      label: 'Item 2',
      subtitle: 'Item 2 subtitle',
      value: 'item2',
    },
    {
      label: 'Item 3',
      subtitle: 'Item 3 subtitle',
      value: 'item3',
    },
  ],
  defaultValue: 'item3',
};
DefaultValueRichRadio.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/dKbMcUDxYQ8INw5cUdvXLI/amino-tokens-2021?node-id=245%3A181',
  },
};
