import { ReactNode, useState } from 'react'

import { Button, Modal, Typography } from '@/components'

import s from './dialog.module.scss'

type ActionDialog = 'removeCard' | 'removeDeck'

type DialogProps = {
  action: ActionDialog
  buttonTitle: string
  itemName: string
  modalHeaderTitle: string
  onClick: () => void
  trigger: ReactNode
}

export const Dialog = ({
  action,
  buttonTitle,
  itemName,
  modalHeaderTitle,
  onClick,
  trigger,
}: DialogProps): JSX.Element => {
  const [open, setOpen] = useState(false)

  const onClose = () => {
    setOpen(false)
  }

  const onButtonClickHandler = () => {
    onClick()
    setOpen(false)
  }

  return (
    <Modal
      open={open}
      setOpen={setOpen}
      title={modalHeaderTitle}
      trigger={trigger}
    >
      <div className={s.root}>
        <Typography.Body1 className={s.text}>
          {getDialogText(action, itemName)}
        </Typography.Body1>
        <div className={s.buttonContainer}>
          <Button onClick={onClose} type={'button'} variant={'secondary'}>
            <Typography.Subtitle2 as={'span'}>Cancel</Typography.Subtitle2>
          </Button>
          <Button onClick={onButtonClickHandler}>
            <Typography.Subtitle2 as={'span'}>
              {buttonTitle}
            </Typography.Subtitle2>
          </Button>
        </div>
      </div>
    </Modal>
  )
}

const getDialogText = (action: ActionDialog, itemName?: string) => {
  const dialogVariants: Record<ActionDialog, ReactNode> = {
    removeCard: (
      <>
        Do you really want to remove this card from the deck? <br /> The card
        will be deleted.
      </>
    ),
    removeDeck: (
      <>
        Do you really want to remove <b>{itemName}?</b> <br /> All cards will be
        deleted.
      </>
    ),
  }

  return dialogVariants[action]
}
