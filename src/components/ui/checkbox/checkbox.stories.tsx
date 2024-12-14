import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { CheckBox } from './checkbox'

const meta = {
  component: CheckBox,
  tags: ['autodocs'],
  title: 'Components/Checkbox',
} satisfies Meta<typeof CheckBox>

export default meta
type Story = StoryObj<typeof meta>

export const Unchecked: Story = {
  args: {
    checked: false,
    label: 'Click me',
    onChange: () => {},
  },
}

export const Checked: Story = {
  args: {
    checked: true,
    label: 'Click me',
    onChange: () => {},
  },
}
export const DisabledChecked: Story = {
  args: {
    checked: true,
    disabled: true,
    label: 'Click me',
    onChange: () => {},
  },
}

export const DisabledUnchecked: Story = {
  args: {
    checked: false,
    disabled: true,
    label: 'Click me',
    onChange: () => {},
  },
}

export const Controlled: Story = {
  args: {
    checked: false,
    label: 'Click here',
    onChange: () => {},
  },
  render: args => {
    const [checked, setChecked] = useState(false)

    return (
      <CheckBox
        {...args}
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
    )
  },
}
