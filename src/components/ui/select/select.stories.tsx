import type { Meta, StoryObj } from '@storybook/react'

import { RadixSelect } from '@/components/ui/select'

const meta = {
  argTypes: { onValueChange: { action: 'select changed' } },
  component: RadixSelect,
  tags: ['autodocs'],
  title: 'Components/Select',
} satisfies Meta<typeof RadixSelect>

export default meta
type Story = StoryObj<typeof meta>

const options = [
  { label: 'Option 1', value: 'option-1' },
  { label: 'Option 2', value: 'option-2' },
  { label: 'Option 3', value: 'option-3' },
  { label: 'Option 3', value: 'option-4' },
  { label: 'Option 3', value: 'option-5' },
]

const SmallOptions = [
  { label: '1', value: '1' },
  { label: '2', value: '2' },
  { label: '3', value: '3' },
  { label: '4', value: '4' },
  { label: '5', value: '5' },
]

export const Default: Story = {
  args: { label: 'Select', options, placeholder: 'Select an option' },
}

export const Small: Story = {
  args: {
    label: 'Select',
    options: SmallOptions,
    paginate: true,
    placeholder: '...',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Select',
    options,
    placeholder: 'Select an option',
  },
}
