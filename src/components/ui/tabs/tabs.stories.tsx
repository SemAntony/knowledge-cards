import type { Meta, StoryObj } from '@storybook/react'

import { Tabs } from './tabs'

const meta = {
  component: Tabs,
  tags: ['autodocs'],
  title: 'Component/Tabs',
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = { args: {} }
