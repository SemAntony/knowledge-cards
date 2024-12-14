import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { CheckBox, CheckboxProps } from '../../checkbox'

export type ControlledCheckboxProps<TFieldValues extends FieldValues> = Omit<
  CheckboxProps,
  'errorMessage' | 'id' | 'onChange' | 'value'
> &
  UseControllerProps<TFieldValues>

export const FormCheckbox = <TFieldValues extends FieldValues>({
  control,
  defaultValue,
  name,
  rules,
  shouldUnregister,
  ...checkboxProps
}: ControlledCheckboxProps<TFieldValues>) => {
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({
    control,
    defaultValue,
    name,
    rules,
    shouldUnregister,
  })
  const { checked, ...restCheckboxProps } = checkboxProps

  return (
    <CheckBox
      {...{
        checked: value,
        errorMessage: error?.message,
        id: name,
        onChange,
        ...restCheckboxProps,
      }}
    />
  )
}
