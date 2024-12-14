import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { TextField, TextFieldProps } from '../../textField'

export const FormTextField = <T extends FieldValues>({
  control,
  name,
  ...rest
}: FormTextFieldProps<T>) => {
  const {
    field,
    fieldState: { error },
  } = useController({ control, name })

  return (
    <TextField
      {...{
        ...rest,
        validationError: error?.message,
        ...field,
      }}
    />
  )
}

export type FormTextFieldProps<T extends FieldValues> = Omit<
  TextFieldProps,
  'name' | 'onBlur' | 'onChange' | 'validationError' | 'value'
> &
  UseControllerProps<T>
