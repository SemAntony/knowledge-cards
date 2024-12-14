import type { Meta, StoryObj } from '@storybook/react'

import { RadixSlider } from '@/components/ui'

const meta = {
  component: RadixSlider,
  tags: ['autodocs'],
  title: 'Component/Slider',
} satisfies Meta<typeof RadixSlider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = { args: {} }
