import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { withDesign } from 'storybook-addon-designs';

import { Slider, SliderProps } from '../components/Slider';

const SliderMeta: Meta = {
  title: 'Amino/Slider',
  component: Slider,
  decorators: [withDesign],
};

export default SliderMeta;

const Template: Story<SliderProps> = args => <Slider {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 50,
  min: 0,
  max: 100,
  step: 1,
};
Default.parameters = {
  design: {
    type: 'figma',
    url: '',
  },
};
