import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

export const TableBody = forwardRef<
  ElementRef<'tbody'>,
  ComponentPropsWithoutRef<'tbody'>
>(({ ...rest }, ref) => {
  return <tbody {...rest} ref={ref} />
})
