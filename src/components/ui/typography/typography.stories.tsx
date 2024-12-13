import type { Meta, StoryObj } from '@storybook/react'

import { Typography, VARIANTS } from './typography'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: Object.values(VARIANTS),
    },
  },
  args: {
    children:
      'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    variant: 'body1',
  },
  component: Typography.Body1,
  tags: ['autodocs'],
  title: 'Components/Typography',
} satisfies Meta<typeof Typography.Body1>

export default meta
type Story = StoryObj<typeof meta>

export const Body1: Story = {
  render: args => <Typography.Body1 {...args} />,
}

export const Body2: Story = {
  render: args => <Typography.Body2 {...args} />,
}

export const Caption: Story = {
  render: args => <Typography.Caption {...args} />,
}

export const Error: Story = {
  render: args => <Typography.Error {...args} />,
}

export const H1: Story = {
  render: args => <Typography.H1 {...args} />,
}

export const H2: Story = {
  render: args => <Typography.H2 {...args} />,
}

export const H3: Story = {
  render: args => <Typography.H3 {...args} />,
}

export const H4: Story = {
  render: args => <Typography.H4 {...args} />,
}

export const Link1: Story = {
  render: args => <Typography.Link1 {...args} />,
}

export const Link2: Story = {
  render: args => <Typography.Link2 {...args} />,
}

export const Overline: Story = {
  render: args => <Typography.Overline {...args} />,
}

export const Subtitle1: Story = {
  render: args => <Typography.Subtitle1 {...args} />,
}

export const Subtitle2: Story = {
  render: args => <Typography.Subtitle2 {...args} />,
}
