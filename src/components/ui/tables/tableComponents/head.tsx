import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

export const TableHead = forwardRef<
  ElementRef<'thead'>,
  ComponentPropsWithoutRef<'thead'>
>(({ ...rest }, ref) => {
  return <thead {...rest} ref={ref} />
})
