import { Story } from '@storybook/react';

import Text, { Props } from 'components/Text';

export default {
  title: 'Example/Text',
  component: Text,
};

const Template: Story<Props> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: 'red',
};
