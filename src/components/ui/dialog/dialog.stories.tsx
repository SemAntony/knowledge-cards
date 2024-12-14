import type { Meta, StoryObj } from '@storybook/react'

import { Trash } from '@/assets/icons/components'
import { Button } from '@/components'
import { action } from '@storybook/addon-actions'

import { Dialog } from './dialog'

const meta = {
  component: Dialog,
  tags: ['autodocs'],
  title: 'Component/Dialog',
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultDeletePack: Story = {
  args: {
    action: 'removeDeck',
    buttonTitle: 'Delete Pack',
    itemName: 'First Pack',
    modalHeaderTitle: 'Delete Pack',
    onClick: action('Clicked for Delete Pack button'),
    trigger: (
      <Button variant={'secondary'}>
        <Trash width={1.6} /> Delete Pack
      </Button>
    ),
  },
}

export const DefaultDeleteCard: Story = {
  args: {
    action: 'removeCard',
    buttonTitle: 'Delete Card',
    itemName: 'First Card',
    modalHeaderTitle: 'Delete Card',
    onClick: action('Clicked for Delete Card button'),
    trigger: (
      <Button variant={'secondary'}>
        <Trash width={1.6} /> Delete Card
      </Button>
    ),
  },
}
