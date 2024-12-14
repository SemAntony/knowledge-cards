import {
  ChangeEvent,
  ComponentProps,
  ComponentPropsWithoutRef,
  KeyboardEvent,
  forwardRef,
  useId as generateId,
  useState,
} from 'react'

import { Close, Eye, EyeOff, Search } from '@/assets/icons/components'
import { Label } from '@/components/ui/label'
import { Typography } from '@/components/ui/typography'
import { clsx } from 'clsx'

import s from './textField.module.scss'

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (props, ref) => {
    const {
      className,
      clearField,
      handleValueChange,
      id,
      label,
      onChange,
      onEnter,
      onKeyDown,
      placeholder,
      type = 'text',
      validationError,
      ...rest
    } = props

    const [showPassword, setShowPassword] = useState<boolean>(false)

    const isSearchType = type === 'search'
    const isPasswordType = type === 'password'

    const TSE = isSearchType || type === 'text' || type === 'email'
    const inputId = useGetId(id)

    const showError = !!validationError && validationError.length > 0
    const displayClearField = TSE && clearField && rest?.value?.length! > 0

    const inputType = resolveInputType(type, showPassword)

    const handleInputChange = useHandleInputChange(onChange, handleValueChange)
    const handleKeyDown = useHandleKeyDown(onEnter, onKeyDown)

    return (
      <div className={s.container}>
        {label && (
          <Label className={s.label} labelText={label}>
            {label}
          </Label>
        )}

        <Typography.Body1
          as={'div'}
          className={s.inputWrapper}
          variant={'body1'}
        >
          <input
            className={clsx(
              s.input,
              isSearchType && s.search,
              isPasswordType && s.password,
              className
            )}
            id={inputId}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            ref={ref}
            type={inputType}
            {...rest}
          />
          {isSearchType && (
            <span className={s.searchIcon}>
              <Search />
            </span>
          )}
          {displayClearField && !isPasswordType && (
            <button
              className={s.clearFieldBtn}
              onClick={clearField}
              type={'button'}
            >
              <Close />
            </button>
          )}
          {isPasswordType && (
            <button
              className={s.eyeToggle}
              onClick={() => setShowPassword(prev => !prev)}
              type={'button'}
            >
              {showPassword ? <Eye /> : <EyeOff />}
            </button>
          )}
        </Typography.Body1>

        {showError && (
          <Typography.Error className={s.errorMessage}>
            {validationError}
          </Typography.Error>
        )}
      </div>
    )
  }
)

const resolveInputType = (
  type: ComponentProps<'input'>['type'],
  passwordVisible: boolean
) => (type === 'password' && passwordVisible ? 'text' : type)

const useHandleInputChange = (
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void,
  handleValueChange?: (value: string) => void
): ((event: ChangeEvent<HTMLInputElement>) => void) => {
  return (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.currentTarget.value

    onChange?.(event)
    handleValueChange?.(inputValue)
  }
}

const useHandleKeyDown = (
  onEnter?: (event: KeyboardEvent<HTMLInputElement>) => void,
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void
): ((e: KeyboardEvent<HTMLInputElement>) => void) => {
  return (e: KeyboardEvent<HTMLInputElement>) => {
    if (onEnter && e.key === 'Enter') {
      onEnter(e)
    }
    onKeyDown?.(e)
  }
}

const useGetId = (id?: string): string => id || generateId()

export interface TextFieldProps extends ComponentPropsWithoutRef<'input'> {
  clearField?: () => void
  handleValueChange?: (value: string) => void
  id?: string
  label?: string
  onEnter?: (e: KeyboardEvent<HTMLInputElement>) => void
  type?: 'email' | 'password' | 'search' | 'text'
  validationError?: string
  value?: string
}
