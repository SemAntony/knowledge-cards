import { ReactNode, forwardRef, useId, useMemo } from 'react'

import { ArrowIosDownOutline, ArrowIosUp } from '@/assets/icons/components'
import { Typography } from '@/components/ui/typography'
import * as Select from '@radix-ui/react-select'
import { clsx } from 'clsx'

import s from './select.module.scss' // todo : SHOULD I ADD forwardRef HERE?
// todo : SHOULD I ADD forwardRef HERE?

const staticClassNames = {
  container: s.container,
  content: s.content,
  group: s.group,
  icon: s.icon,
  iconBox: s.iconBox,
  label: s.label,
  option: s.option,
  placeholder: s.placeholder,
  scrollButton: s.scrollButton,
  separator: s.separator,
  upArrow: s.upArrow,
  value: s.value,
  viewport: s.viewport,
}

export const RadixSelect = forwardRef<HTMLButtonElement, RadixSelectProps>(
  (props, forwardedRef) => {
    const {
      defaultValue,
      disabled,
      fullWidth,
      label,
      onValueChange,
      options,
      paginate,
      placeholder,
      required,
      value,
    } = props

    const triggerClassName = useMemo(
      () => clsx(s.trigger, fullWidth && s.fullWidth, paginate && s.pagination),
      [fullWidth, paginate]
    )

    const classNames = {
      ...staticClassNames,
      trigger: triggerClassName,
    }

    const generatedId = useId()

    return (
      <div className={classNames.container}>
        <Typography.Body2
          as={'label'}
          className={classNames.label}
          data-disabled={disabled}
          id={generatedId}
        >
          {label}
        </Typography.Body2>

        <Select.Root
          defaultValue={defaultValue?.toString()}
          disabled={disabled}
          onValueChange={onValueChange}
          required={required}
          value={value}
        >
          <Select.Trigger
            aria-label={'select'}
            className={classNames.trigger}
            ref={forwardedRef}
          >
            <Select.Value placeholder={placeholder} />
            <Select.Icon className={classNames.iconBox}>
              <ArrowIosDownOutline className={classNames.icon} />
            </Select.Icon>
          </Select.Trigger>
          <Select.Portal>
            <Select.Content className={classNames.content} position={'popper'}>
              <Select.ScrollUpButton
                asChild
                className={classNames.scrollButton}
              >
                <ArrowIosUp className={clsx(s.arrow, s.upArrow)} />
              </Select.ScrollUpButton>
              <Select.Viewport className={classNames.viewport}>
                <Select.Separator className={classNames.separator} />

                <Select.Group className={classNames.group}>
                  <Select.Label className={classNames.label}>
                    {options.map((option, index) => (
                      <SelectItem
                        className={clsx(s.item, paginate && s.paginationItem)}
                        key={index}
                        value={option.value}
                      >
                        {option.label}
                      </SelectItem>
                    ))}
                  </Select.Label>
                </Select.Group>
              </Select.Viewport>
              <Select.ScrollDownButton className={classNames.scrollButton}>
                <ArrowIosDownOutline className={clsx(s.arrow, s.downArrow)} />
              </Select.ScrollDownButton>
            </Select.Content>
          </Select.Portal>
        </Select.Root>
      </div>
    )
  }
)

const SelectItem = forwardRef<HTMLDivElement, SelectItemProps>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <Select.Item className={clsx(className)} {...props} ref={forwardedRef}>
        <Select.ItemText className={s.itemText}>
          <Typography.Body1>{children}</Typography.Body1>
        </Select.ItemText>
        <Select.ItemIndicator className={s.itemIndicator}>
          {/*<strong style={{ color: 'var(--color-info-700)' }}> &lt; </strong>*/}
        </Select.ItemIndicator>
      </Select.Item>
    )
  }
)

interface SelectItemProps {
  children: ReactNode
  className?: string
  value: string
}

export interface RadixSelectProps {
  defaultValue?: number | string
  disabled?: boolean
  fullWidth?: boolean
  label?: string
  onValueChange?: (value: string) => void
  options: {
    label: string
    value: string
  }[]
  paginate?: boolean
  placeholder?: ReactNode
  required?: boolean
  value?: string
}
