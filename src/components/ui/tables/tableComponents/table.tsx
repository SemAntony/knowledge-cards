import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { clsx } from 'clsx'

import s from './table.module.scss'

export const Table = forwardRef<
  HTMLTableElement,
  ComponentPropsWithoutRef<'table'>
>(({ className, ...rest }, ref) => {
  const classNames = {
    table: clsx(className, s.table),
  }

  return <table className={classNames.table} {...rest} ref={ref} />
})
