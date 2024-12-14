import React from 'react'

import { Star, StarOutline } from '@/assets/icons/components'
import { clsx } from 'clsx'

import s from './rating.module.scss'

export const Rating: React.FC<RatingProps> = ({ maxRating = 5, rating }) => {
  const fullStars = Math.floor(rating)
  const halfStar = rating % 1 > 0 // Check if there's a half star
  const emptyStars = maxRating - fullStars - (halfStar ? 1 : 0)

  const renderStars = () => {
    let stars: React.ReactNode[] = []

    for (let i = 0; i < fullStars; i++) {
      stars = stars.concat(
        <Star className={clsx(s.star, s.filled)} key={`full-${i}`} />
      )
    }

    if (halfStar) {
      stars = stars.concat(
        <div className={s.halfStarWrapper} key={'half'}>
          <StarOutline className={clsx(s.star, s.empty)} />
          <Star className={clsx(s.star, s.halfFilled)} />
        </div>
      )
    }

    for (let i = 0; i < emptyStars; i++) {
      stars = stars.concat(
        <StarOutline className={clsx(s.star, s.empty)} key={`empty-${i}`} />
      )
    }

    return stars
  }

  return <div className={clsx(s.rating)}>{renderStars()}</div>
}

export type RatingProps = {
  maxRating?: number
  rating: number
}
