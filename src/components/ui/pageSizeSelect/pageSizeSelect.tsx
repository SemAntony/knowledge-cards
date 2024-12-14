import React, { useCallback, useMemo } from 'react'

import { RadixSelect } from '../select'

export const PageSizeSelect: React.FC<PageSizeSelectProps> = ({
  onPageSizeChange,
  pageSize = 10,
  pageSizeOptions = [10, 20, 30, 50, 100],
}) => {
  const options = useMemo(
    () =>
      pageSizeOptions?.map(option => {
        const optionStr = option.toString()

        return {
          label: optionStr,
          value: option.toString(),
        }
      }),
    [pageSizeOptions]
  )
  const onValueChange = useCallback(
    (value: string) => {
      onPageSizeChange(+value /*parseInt(value, 10)*/)
    },
    [onPageSizeChange]
  )

  return (
    <RadixSelect
      onValueChange={onValueChange}
      options={options}
      paginate
      value={pageSize.toString()}
    />
  )
}

interface PageSizeSelectProps {
  onPageSizeChange: (pageSize: number) => void
  pageSize: number
  pageSizeOptions?: number[]
}
