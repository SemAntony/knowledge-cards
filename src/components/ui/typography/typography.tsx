import React, {
  CSSProperties,
  ComponentPropsWithoutRef,
  ElementType,
  ReactNode,
} from 'react'

import { clsx } from 'clsx'

import style from './typography.module.scss' // Base Typography component

// Base Typography component
const TypographyBase = <T extends React.ElementType = 'p'>(
  props: Omit<ComponentPropsWithoutRef<T>, keyof TypographyProps<T>> &
    TypographyProps<T>
): React.ReactElement => {
  const {
    as,
    children,
    className,
    color,
    size,
    variant = 'body1',
    ...rest
  } = props
  const Component = as || 'p'

  const styles = {
    ...(color && { color }),
    ...style,
  }

  // if (Component === 'caption') {
  //   return <caption style={styles}>{children}</caption>
  // }

  return (
    <Component
      className={`${clsx(style[variant], className)}`}
      style={styles}
      {...rest}
    >
      {children}
    </Component>
  )
}

// Higher-order function to create subcomponents
const createTypographyVariant = (variant: Variants) => {
  return <T extends ElementType = 'p'>(props: TypographyProps<T>) => (
    <TypographyBase {...props} variant={variant} />
  )
}

// Create subcomponents
export const Typography = {
  Body1: createTypographyVariant('body1'),
  Body2: createTypographyVariant('body2'),
  Caption: createTypographyVariant('caption'),
  Error: createTypographyVariant('error'),
  ErrorCaption: createTypographyVariant('errorCaption'),
  H1: createTypographyVariant('h1'),
  H2: createTypographyVariant('h2'),
  H3: createTypographyVariant('h3'),
  H4: createTypographyVariant('h4'),
  Link1: createTypographyVariant('link1'),
  Link2: createTypographyVariant('link2'),
  Overline: createTypographyVariant('overline'),
  Subtitle1: createTypographyVariant('subtitle1'),
  Subtitle2: createTypographyVariant('subtitle2'),
}

export const VARIANTS = {
  body1: 'body1',
  body2: 'body2',
  caption: 'caption',
  error: 'error',
  errorCaption: 'caption',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  link1: 'link1',
  link2: 'link2',
  overline: 'overline',
  subtitle1: 'subtitle1',
  subtitle2: 'subtitle2',
} as const

type Variants = keyof typeof VARIANTS

export type TypographyProps<T extends ElementType = 'p'> = {
  as?: T
  children?: ReactNode
  color?: CSSProperties['color']
  variant?: Variants
} & ComponentPropsWithoutRef<T>
