import type { Meta, StoryObj } from '@storybook/react'

import type { CSSProperties } from 'react'

import { Card } from './card'

const meta: Meta<typeof Card> = {
  component: Card,
  tags: ['autodocs'],
  title: 'Components/Card',
}

export default meta
type Story = StoryObj<typeof meta>

const contentStyles: CSSProperties = { fontSize: '24px', textAlign: 'center' }

export const Default: Story = {
  args: {
    children: <div style={contentStyles}>Card</div>,
    style: {
      border: ' 1px solid #313131',
      boxShadow: '-1px -1px 2px 0px #0000001A',
      height: '552px',
      padding: '24px',
      width: '420px',
    },
  },
}
