import {
  ComponentPropsWithoutRef,
  ReactElement,
  ReactNode,
  useState,
} from 'react'

import { Close } from '@/assets/icons/components'
import { Typography } from '@/components'
import * as ModalPrimitive from '@radix-ui/react-dialog'
import { clsx } from 'clsx'

import s from './modal.module.scss'

export type ModalProps = {
  children: ReactNode
  open?: boolean
  setOpen?: (open: boolean) => void
  title: string
  trigger?: ReactNode
} & Omit<
  ComponentPropsWithoutRef<typeof ModalPrimitive.Dialog>,
  'onOpenChange' | 'open'
>

export const Modal = ({
  children,
  open: controlledOpen,
  setOpen: controlledSetOpen,
  title,
  trigger,
}: ModalProps): ReactElement => {
  const [localOpen, setLocalOpen] = useState(false)
  const isControlled = controlledOpen !== undefined

  const open = isControlled ? controlledOpen : localOpen
  const setOpen = isControlled ? controlledSetOpen! : setLocalOpen

  return (
    <ModalPrimitive.Root onOpenChange={setOpen} open={open}>
      {trigger && (
        <ModalPrimitive.Trigger asChild>{trigger}</ModalPrimitive.Trigger>
      )}

      <ModalPrimitive.Portal>
        <ModalPrimitive.Overlay className={s.overlay} />
        <ModalPrimitive.Content className={clsx(s.content)}>
          <div className={s.header}>
            <Typography.H2>{title}</Typography.H2>
            <ModalPrimitive.Close className={s.closeButton}>
              <Close />
            </ModalPrimitive.Close>
          </div>
          <div>{children}</div>
        </ModalPrimitive.Content>
      </ModalPrimitive.Portal>
    </ModalPrimitive.Root>
  )
}
