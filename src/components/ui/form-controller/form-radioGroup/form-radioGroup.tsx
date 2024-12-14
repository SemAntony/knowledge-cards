import { Control, FieldPath, FieldValues, useController } from 'react-hook-form'

import { RadioGroupProps, RadixRadioGroup } from '../../radioGroup'

export type FormRadioGroupProps<T extends FieldValues> = {
  control: Control<T>
  name: FieldPath<T>
} & Omit<RadioGroupProps, 'id' | 'onValueChange' | 'value'>

export const FormRadioGroup = <T extends FieldValues>(
  props: FormRadioGroupProps<T>
) => {
  const {
    field: { onChange, ...field },
    fieldState: { error },
  } = useController({ control: props.control, name: props.name })

  return (
    <RadixRadioGroup
      {...{
        ...field,
        ...props,

        error: error?.message,
        id: props.name,
        onValueChange: onChange,
      }}
    />
  )
}
