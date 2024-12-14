import { CSSProperties, ComponentPropsWithoutRef } from 'react'

import { clsx } from 'clsx'

import s from './page.module.scss'

export const Page = ({ className, mt, style, ...rest }: PageProps) => {
  const classNames = {
    page: clsx(className, s.page),
  }
  const styles: CSSProperties = {
    marginTop: mt,
    ...style,
  }

  return <main className={classNames.page} style={styles} {...rest} />
}

type PageProps = {
  // children: React.ReactNode
  mt?: CSSProperties['marginTop']
} & ComponentPropsWithoutRef<'div'>
