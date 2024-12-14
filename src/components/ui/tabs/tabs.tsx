import React, { ComponentPropsWithoutRef, forwardRef } from 'react'

import { Typography } from '@/components/ui/typography'
import * as TabsRadix from '@radix-ui/react-tabs'

import s from './tabs.module.scss'

export const Tabs = forwardRef<
  React.ElementRef<typeof TabsRadix.Root>,
  TabsProps
>((props, ref) => {
  const { children, label, tabs, ...restProps } = props

  return (
    <TabsRadix.Root className={s.container} {...restProps} ref={ref}>
      {label && <Typography.Body2 as={'div'}>{label}</Typography.Body2>}
      <TabsRadix.List>
        {tabs.map(tab => (
          <TabsRadix.Trigger
            className={s.trigger}
            disabled={tab.disabled}
            key={tab.value}
            value={tab.value}
          >
            <Typography.Body1>{tab.title}</Typography.Body1>
          </TabsRadix.Trigger>
        ))}
      </TabsRadix.List>
      {children}
    </TabsRadix.Root>
  )
})

interface Tab {
  disabled?: boolean
  title: string
  value: string
}

export interface TabsProps
  extends ComponentPropsWithoutRef<typeof TabsRadix.Root> {
  children?: React.ReactNode
  label?: string
  tabs: Tab[]
}
