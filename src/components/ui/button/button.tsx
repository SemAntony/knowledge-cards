import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './button.module.scss'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  children?: ReactNode
  className?: string
  fullWidth?: boolean
  iconPosition?: 'left' | 'right'
  variant?: 'icon' | 'primary' | 'secondary'
} & ComponentPropsWithoutRef<T>

// todo Need to add forwardRef for button !!!!!
export const Button = <T extends ElementType = 'button'>(
  props: ButtonProps<T>
) => {
  const {
    as: Component = 'button',
    className,
    fullWidth,
    iconPosition = 'left',
    variant = 'primary',
    ...rest
  } = props

  const positionClasses = {
    left: s.left,
    right: s.right,
  }
  const positionClass = positionClasses[iconPosition]

  const buttonClasses = clsx(
    s[variant],
    fullWidth ? s.fullWidth : '',
    className,
    positionClass,
    s.button
  )

  return <Component className={buttonClasses} {...rest} />
}
