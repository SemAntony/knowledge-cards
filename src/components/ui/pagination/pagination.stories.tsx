import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Pagination, PaginationProps } from './pagination'

const meta = {
  component: Pagination,
  tags: ['autodocs'],
  title: 'Component/Pagination',
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    currentPage: 1,
    onPageChange: page => console.log('Page changed:', page),
    onPageSizeChange: size => console.log('Page size changed:', size),
    pageSize: 10,
    siblingCount: 1,
    totalCount: 100,
  },
  render: (args: PaginationProps) => {
    const [currentPage, setCurrentPage] = useState(args.currentPage || 1)
    const [pageSize, setPageSize] = useState(args.pageSize || 10)

    return (
      <Pagination
        {...args}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        onPageSizeChange={newSize => {
          setPageSize(newSize)
          args.onPageSizeChange?.(newSize)
        }}
        pageSize={pageSize}
      />
    )
  },
}
