import type { Meta, StoryObj } from '@storybook/react'

import { TextField } from './textField'

const meta = {
  component: TextField,
  tags: ['autodocs'],
  title: 'Components/TextField',
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = { args: {} }
