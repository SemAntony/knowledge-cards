import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { clsx } from 'clsx'

import s from './table.module.scss'

export const TableCell = forwardRef<
  ElementRef<'td'>,
  ComponentPropsWithoutRef<'td'>
>(({ className, ...rest }, ref) => {
  const classNames = {
    cell: clsx(className, s.tableCell),
  }

  return <td className={classNames.cell} {...rest} ref={ref} />
})
