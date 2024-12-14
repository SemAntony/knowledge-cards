import React, { forwardRef, useId } from 'react'

import { Label } from '@/components/ui/label'
import * as RadioGroup from '@radix-ui/react-radio-group'

import s from './radioGroup.module.scss'
// todo : SHOULD I ADD forwardRef HERE?
export const RadixRadioGroup = forwardRef<
  React.ElementRef<typeof RadioGroup.Root>,
  RadioGroupProps
>(({ className, disabled, error, id, label, options, ...props }, ref) => {
  const generatedId = useId()

  return (
    <fieldset className={`${s.fieldset} ${error ? s.error : ''}`}>
      <legend className={s.legend}>{label}</legend>
      <RadioGroup.Root
        className={`${s.root} ${className}`}
        data-disabled={disabled || false}
        ref={ref}
        {...props}
      >
        {options.map(({ label, value }) => (
          <div className={s.option} key={value}>
            <RadioGroup.Item
              className={`${s.item} `}
              data-disabled={disabled || false}
              disabled={disabled}
              id={id ?? generatedId}
              value={value}
            >
              <RadioGroup.Indicator className={s.indicator} />
            </RadioGroup.Item>
            <Label
              className={`${s.label} ${disabled ? s.disabled : ''}`}
              htmlFor={id ?? generatedId}
              labelText={value}
            >
              {label}
            </Label>
          </div>
        ))}
      </RadioGroup.Root>
      {error && <p className={s.errorMessage}>{error}</p>}
    </fieldset>
  )
})

RadixRadioGroup.displayName = 'RadixRadioGroup'

type Option = { label: string; value: string }
export type RadioGroupProps = {
  disabled?: boolean
  error?: null | string
  label: string
  options: Option[]
} & Omit<React.ComponentPropsWithoutRef<typeof RadioGroup.Root>, 'children'>
