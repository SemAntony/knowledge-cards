export const storiesTemplate = componentName => `
import type { Meta, StoryObj } from '@storybook/react';
import { ${componentName} } from './';

const meta = {
  argTypes: {},
  component: ${componentName},
  tags: ['autodocs'],
  title: 'Components/${componentName}'
} satisfies Meta<typeof ${componentName}>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
`
