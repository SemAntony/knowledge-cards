import React, { CSSProperties, ComponentPropsWithoutRef, useState } from 'react'

import { getAvatarFallbackText } from '@/components/ui/avatar'
import { Fallback, Image, Root } from '@radix-ui/react-avatar'
import { clsx } from 'clsx'

import s from './avatar.module.scss'

export const Avatar: React.FC<AvatarProps> = props => {
  const {
    className,
    fallbackAvatarText,
    imageAltText,
    imageUrl,
    onLoadingStatusChange,
    size,
    style,
    userName,
  } = props

  const avatarFallbackText = getAvatarFallbackText(fallbackAvatarText, userName)

  const avatarSize = size || '2.25rem'
  const avatarStyle = {
    ...style,
    height: avatarSize,
    width: avatarSize,
  }

  type ImageLoadingStatus = 'error' | 'idle' | 'loaded' | 'loading'

  const [loadingStatus, setLoadingStatus] =
    useState<ImageLoadingStatus>('loading')
  const handleLoad = () => {
      setLoadingStatus('loaded')
      onLoadingStatusChange?.('loaded')
    },
    handleError = () => {
      setLoadingStatus('error')
      onLoadingStatusChange?.('error')
    }

  return (
    <Root className={s.root} style={avatarStyle}>
      {loadingStatus === 'loading' && (
        <Fallback className={s.fallback} delayMs={600}>
          ...loading
        </Fallback>
      )}
      {loadingStatus !== 'error' && (
        <Image
          alt={imageAltText}
          aria-label={imageAltText}
          className={clsx(s.image, className, {
            [s.hidden]: loadingStatus === 'loading',
          })}
          onError={handleError}
          onLoad={handleLoad}
          onLoadingStatusChange={onLoadingStatusChange}
          src={imageUrl}
        />
      )}
      {loadingStatus === 'error' ||
        (loadingStatus === 'loaded' && !imageUrl && (
          <Fallback className={s.fallback} delayMs={600}>
            {avatarFallbackText}
          </Fallback>
        ))}
    </Root>
  )
}

interface AvatarProps extends ComponentPropsWithoutRef<typeof Image> {
  className?: string
  fallbackAvatarText?: string
  imageAltText: string | undefined
  imageUrl: string | undefined
  size?: number | string
  style?: CSSProperties
  userName?: string
}
