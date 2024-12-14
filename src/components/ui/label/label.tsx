import { ComponentPropsWithoutRef, FC, ReactNode } from 'react'

import { Typography } from '@/components/ui/typography'

export interface LabelProps extends ComponentPropsWithoutRef<'label'> {
  children: ReactNode
  disabled?: boolean
  labelText: string
}
// todo : SHOULD I ADD forwardRef HERE?
export const Label: FC<LabelProps> = props => {
  const { children, className, labelText, ...rest } = props

  return (
    <Typography.Body2
      aria-label={labelText}
      as={'label'}
      className={className}
      htmlFor={labelText}
      {...rest}
    >
      {children}
    </Typography.Body2>
  )
}
