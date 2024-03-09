import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

import { within } from '@storybook/testing-library';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Button',
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'onClick' },
  },
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    value: 'Test',
    variant: 'default',
    size: 'default',
  },
};

export const Heading: Story = {
  args: {
    value: 'pommes',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // expect(canvas.getByText(/Welcome to Ui!/gi)).toBeTruthy();
  },
};
