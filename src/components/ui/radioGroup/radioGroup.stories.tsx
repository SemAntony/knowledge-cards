import type { Meta, StoryObj } from '@storybook/react'

import { RadixRadioGroup } from './radioGroup'

const meta = {
  component: RadixRadioGroup,
  tags: ['autodocs'],
  title: 'Component/RadioGroup',
} satisfies Meta<typeof RadixRadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = { args: {} }
