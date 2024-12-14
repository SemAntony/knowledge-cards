import React, {
  CSSProperties,
  ComponentPropsWithoutRef,
  FC,
  ReactNode,
  forwardRef,
} from 'react'

import { MoreVerticalOutline } from '@/assets/icons/components'
import { Typography } from '@/components/ui'
import { useToggle } from '@/hook'
import {
  Arrow,
  Content,
  Item,
  Portal,
  Root,
  Separator,
  Trigger,
} from '@radix-ui/react-dropdown-menu'
import { clsx } from 'clsx'

import s from './dropdown.module.scss'
// todo : SHOULD I ADD forwardRef HERE?
export const Dropdown = forwardRef<
  React.ElementRef<typeof Root>,
  DropdownProps
>((props, ref) => {
  const {
    align = 'end',
    children,
    className,
    style,
    trigger,
    ...restProps
  } = props

  const [isOpen, toggle] = useToggle(false)
  const hasTrigger = Boolean(trigger)

  const classes = {
    arrow: clsx(s.arrow, { [s.smallArrow]: !hasTrigger }),
    content: clsx(
      s.root,
      {
        [s.noTrigger]: !hasTrigger,
        [s.withTrigger]: hasTrigger,
      },
      className
    ),
  }

  return (
    <div className={s.container}>
      <Root onOpenChange={toggle} open={isOpen} {...restProps}>
        <Trigger
          className={clsx(s.trigger, trigger && s.b)}
          onClick={() => console.log('Clicked')}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              toggle()
            }
          }}
          ref={ref}
        >
          {trigger ?? (
            <span className={s.iconBtn}>
              <MoreVerticalOutline className={s.icon} />
            </span>
          )}
        </Trigger>
        {isOpen && (
          <Portal>
            <Content
              align={align}
              className={classes.content}
              onClick={e => e.stopPropagation()}
              sideOffset={8}
              style={style}
            >
              <Arrow className={classes.arrow} />
              <div className={s.itemBbox}>{children}</div>
            </Content>
          </Portal>
        )}
      </Root>
    </div>
  )
})

Dropdown.displayName = 'Dropdown'

export const DropdownItem = forwardRef<
  React.ElementRef<typeof Item>,
  DropdownItemProps
>(({ children, className, icon, onSelect, text, ...rest }, ref) => {
  const itemClass = clsx(s.item, className)

  return (
    <Item className={itemClass} onSelect={onSelect} ref={ref} {...rest}>
      {icon ? (
        <div className={s.ifIconContent}>
          <div className={s.itemIcon}>{icon}</div>
          <Typography.Body2>{text}</Typography.Body2>
        </div>
      ) : (
        children
      )}
    </Item>
  )
})

export const ItemSeparator: FC<SeparatorProps> = (className, { ...rest }) => {
  return (
    <Separator className={clsx(s.separator, className)} {...rest}></Separator>
  )
}

interface SeparatorProps extends ComponentPropsWithoutRef<typeof Separator> {
  className?: string
}

interface DropdownProps extends ComponentPropsWithoutRef<typeof Root> {
  align?: 'center' | 'end' | 'start'
  children: ReactNode
  className?: string
  style?: CSSProperties
  trigger?: ReactNode
}

interface DropdownItemProps extends ComponentPropsWithoutRef<typeof Item> {
  children?: ReactNode
  className?: string
  icon?: ReactNode
  onSelect?: (evt: Event) => void
  text?: ReactNode | string
}
