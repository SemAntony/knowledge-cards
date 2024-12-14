import { useState } from 'react'

import { Modal } from '@/components'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Modal,
  tags: ['autodocs'],
  title: 'Components/Modal',
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Modal',
    open: true,
    setOpen: () => {},
    title: 'Modal',
  },
  render: args => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <button onClick={() => setOpen(true)}>Open Modal</button>
        <Modal {...args} open={open} setOpen={setOpen}>
          <div style={{ padding: '16px' }}>
            <h2>Welcome to the Modal</h2>
            <p>
              This is a simple modal example. You can put any content here, like
              text, images, forms, or anything else you need.
            </p>
          </div>
        </Modal>
      </>
    )
  },
}