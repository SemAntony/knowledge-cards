import React, { ElementRef, forwardRef } from 'react'

import { Label, Typography } from '@/components/ui'
import * as Slider from '@radix-ui/react-slider'

import s from './slider.module.scss'

interface SliderProps
  extends React.ComponentPropsWithoutRef<typeof Slider.Root> {
  name?: string
}
// todo : SHOULD I ADD forwardRef HERE?
export const RadixSlider = forwardRef<
  ElementRef<typeof Slider.Root>,
  SliderProps
>(({ className, max, onValueChange, ...rest }, ref) => {
  const minValue = rest.value?.[0] ?? 0
  const maxValue = rest.value?.[1] ?? max ?? 0

  return (
    <div>
      {rest.name && <Label labelText={rest.name}>{rest.name}</Label>}
      <div className={s.container}>
        <Typography.Body1 as={'span'} className={s.valueDisplay}>
          {minValue}
        </Typography.Body1>
        <Slider.Root
          className={`${s.sliderRoot} ${className}`}
          onValueChange={onValueChange}
          ref={ref}
          {...rest}
        >
          <Slider.Track className={s.sliderTrack}>
            <Slider.Range className={s.sliderRange} />
          </Slider.Track>
          <Slider.Thumb
            aria-label={`Minimum value: ${minValue}`}
            className={s.sliderThumb}
          />
          <Slider.Thumb
            aria-label={`Maximum value: ${maxValue}`}
            className={s.sliderThumb}
          />
        </Slider.Root>
        <Typography.Body1 as={'span'} className={s.valueDisplay}>
          {maxValue}
        </Typography.Body1>
      </div>
    </div>
  )
})

RadixSlider.displayName = 'RadixSlider' // Set a display name for debugging
