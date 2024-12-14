import {
  type ComponentPropsWithoutRef,
  type ReactNode,
  forwardRef,
} from 'react'

import clsx from 'clsx'

import styles from './card.module.scss'
// todo : SHOULD I ADD forwardRef HERE?
export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, className, ...restProps }, ref) => {
    return (
      <div className={clsx(styles['root'], className)} ref={ref} {...restProps}>
        {children}
      </div>
    )
  }
)

interface CardProps extends ComponentPropsWithoutRef<'div'> {
  children?: ReactNode
}
