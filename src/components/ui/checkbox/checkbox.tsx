import { ElementRef, ReactNode, forwardRef } from 'react'

import { Vector as CheckIcon } from '@/assets/icons/components'
import { Typography } from '@/components/ui/typography'
import * as CheckboxRadix from '@radix-ui/react-checkbox'
import * as LabelRadix from '@radix-ui/react-label'
import { clsx } from 'clsx'

import s from './checkbox.module.scss'

export interface CheckboxProps {
  checked?: boolean
  className?: string
  disabled?: boolean
  errorMessage?: string
  id?: string
  label?: ReactNode | string
  onChange: (checked: boolean) => void
  required?: boolean
}

export const CheckBox = forwardRef<
  ElementRef<typeof CheckboxRadix.Root>,
  CheckboxProps
>((props, ref) => {
  const {
    checked,
    className,
    disabled,
    errorMessage,
    id,
    label,
    onChange,
    required,
  } = props

  const classNames = {
    btnWrapper: clsx(s.btnWrapper, disabled && s.disabled),
    container: clsx(s.container, className),
    indicator: s.indicator,
    label: clsx(s.label, disabled && s.disabled),
    root: s.root,
  }

  const handleCheckedChange = (isChecked: 'indeterminate' | boolean) => {
    onChange?.(isChecked === true) // Приводим к boolean значению
  }

  return (
    <div className={s.container}>
      <LabelRadix.Root className={classNames.label}>
        <div className={classNames.btnWrapper}>
          <CheckboxRadix.Root
            checked={checked}
            className={classNames.root}
            disabled={disabled}
            id={id}
            onCheckedChange={handleCheckedChange}
            ref={ref}
            required={required}
          >
            {checked && (
              <CheckboxRadix.Indicator asChild className={classNames.indicator}>
                <CheckIcon />
              </CheckboxRadix.Indicator>
            )}
          </CheckboxRadix.Root>
        </div>
        <Typography.Body2>{label}</Typography.Body2>
      </LabelRadix.Root>
      {errorMessage && <Typography.Error>{errorMessage}</Typography.Error>}
    </div>
  )
})
