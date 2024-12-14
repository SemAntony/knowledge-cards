import { ComponentProps, FC } from 'react'

import { Typography } from '@/components/ui'
import { clsx } from 'clsx'

import s from './table.module.scss'

export const TableEmpty: FC<
  { mb?: string; mt?: string } & ComponentProps<'div'>
> = ({ className, mb, mt = '89px' }) => {
  const classNames = {
    empty: clsx(className, s.empty),
  }

  return (
    <Typography.H2
      as={'div'}
      className={classNames.empty}
      style={{ marginBottom: mb, marginTop: mt }}
    >
      There is no data here yet! :(
    </Typography.H2>
  )
}
