import type { Meta, StoryObj } from '@storybook/react'

import { Table } from '@/components/ui'

const meta = {
  component: Table,
  tags: ['autodocs'],
  title: 'Component/Tables',
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = { args: {} }
