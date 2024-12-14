import React, {
  ComponentPropsWithoutRef,
  ElementRef,
  Ref,
  forwardRef,
} from 'react'

import { ArrowIosDownOutline, ArrowIosUp } from '@/assets/icons/components'
import { Typography } from '@/components/ui'
import { clsx } from 'clsx'

import s from './tableHeader.module.scss'

import { TableHead, TableHeadCell, TableRow } from './tableComponents'

// todo : SHOULD I ADD forwardRef HERE?
export const TableHeader = forwardRef<
  ElementRef<typeof TableHead>,
  TableHeaderProps<any>
>(function TableHeader<T>(
  { columns, onSort, sort, ...restProps }: TableHeaderProps<T>,
  ref: Ref<ElementRef<typeof TableHead>>
) {
  const handleSort = (key: keyof T, sortable?: boolean) => () => {
    if (!onSort || !sortable) {
      return
    }

    const isSameKey = sort?.key === key
    const newDirection = isSameKey && sort?.direction === 'asc' ? 'desc' : 'asc'

    onSort({
      direction: newDirection,
      key: key as string,
    })
  }

  return (
    <TableHead ref={ref} {...restProps}>
      <TableRow>
        {columns.map(({ accessor, id, sortable = true, title }) => {
          const headCellClasses = clsx(sortable && s.activeHeadCell)

          return (
            <TableHeadCell
              className={headCellClasses}
              key={id || accessor.toString()}
              onClick={handleSort(accessor, sortable)}
            >
              <Typography.Subtitle2 as={'span'} className={s.sortCell}>
                {title}
                {sort && sort.key === accessor && (
                  <>
                    {sort.direction === 'asc' ? (
                      <ArrowIosUp
                        className={s.sortIcon}
                        style={{ height: '12px', width: '12px' }}
                      />
                    ) : (
                      <ArrowIosDownOutline
                        className={s.sortIcon}
                        style={{ height: '12px', width: '12px' }}
                      />
                    )}
                  </>
                )}
              </Typography.Subtitle2>
            </TableHeadCell>
          )
        })}
      </TableRow>
    </TableHead>
  )
})

export type Column<T> = {
  accessor: keyof T
  id?: string
  render?: (row: T) => React.ReactNode
  sortable?: boolean
  title: string
}

export type Sort = {
  direction: 'asc' | 'desc'
  key: string
}

export type TableHeaderProps<T> = Omit<
  {
    columns: Column<T>[]
    onSort?: (sort: Sort) => void
    sort?: Sort
  } & ComponentPropsWithoutRef<typeof TableHead>,
  'children'
>
