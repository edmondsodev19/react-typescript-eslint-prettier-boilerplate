import { Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button, { Props } from 'components/Button';

export default {
  title: 'Example/Button',
  component: Button,
};

const Template: Story<Props> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  onClick: action('onClick'),
};
