import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import s from './table.module.scss'

export const TableRow = forwardRef<
  ElementRef<'tr'>,
  ComponentPropsWithoutRef<'tr'>
>(({ ...rest }, ref) => {
  return <tr className={s.row} {...rest} ref={ref} />
})
