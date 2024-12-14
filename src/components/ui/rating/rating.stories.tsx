import type { Meta, StoryObj } from '@storybook/react'

import { Rating } from './rating'

const meta = {
  component: Rating,
  tags: ['autodocs'],
  title: 'Component/Rating',
} satisfies Meta<typeof Rating>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = { args: {} }
