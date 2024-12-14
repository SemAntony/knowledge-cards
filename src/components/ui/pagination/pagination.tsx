import React from 'react'

import {
  ArrowIosBackOutline,
  ArrowIosForwardOutline,
} from '@/assets/icons/components'
import { PageSizeSelect, Typography } from '@/components/ui'
import { clsx } from 'clsx'

import s from './pagination.module.scss'

import { usePagination } from './hook/usePagination'

export const Pagination: React.FC<PaginationProps> = props => {
  const {
    currentPage,
    onPageChange,
    onPageSizeChange = () => {},
    optionsPageSize = [10, 15, 20, 50],
    pageSize = 10,
    siblingCount = 1,
    totalCount,
  } = props

  const paginationRange = usePagination({
    currentPage,
    pageSize: pageSize ?? 10,
    siblingCount,
    totalCount: totalCount ?? 0,
  })

  if (currentPage === 0 || (paginationRange && paginationRange.length < 2)) {
    return null // don't display pagination if there is only 1 page
  }

  const onNext = () => {
    if (currentPage < (paginationRange[paginationRange.length - 1] as number)) {
      onPageChange(currentPage + 1)
    }
  }

  const onPrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1)
    }
  }

  const lastPage =
    paginationRange && (paginationRange[paginationRange.length - 1] as number)

  const hasNext = currentPage > 1,
    hasPrevious = currentPage < lastPage

  return (
    <div className={`${classNames.container}`}>
      {hasNext && (
        <button
          className={`${classNames.item}`}
          onClick={onPrevious}
          type={'button'}
        >
          <span className={`${classNames.arrow} ${classNames.left}`}>
            <ArrowIosBackOutline />
          </span>
        </button>
      )}
      {paginationRange?.map((pageNumber: number | string, index: number) => {
        const key =
          typeof pageNumber === 'number'
            ? `page_${pageNumber}`
            : `dots_between_${paginationRange[index - 1]}_and_${paginationRange[index + 1]}`

        // console.log('Key:', key)

        if (typeof pageNumber !== 'number') {
          return (
            <span
              className={`${classNames.item}  ${classNames.dots}`}
              key={key}
            >
              &#8230;
            </span>
          )
        }

        return (
          <button
            className={clsx(classNames.item, {
              [classNames.selected]: +pageNumber === currentPage,
            })}
            key={key}
            onClick={() => onPageChange(Number(pageNumber))}
            type={'button'}
          >
            {pageNumber}
          </button>
        )
      })}

      {hasPrevious && (
        <button
          className={`${classNames.item}`}
          onClick={onNext}
          type={'button'}
        >
          <span className={`${classNames.arrow} ${classNames.right}`}>
            <ArrowIosForwardOutline />
          </span>
        </button>
      )}

      <div className={s.select}>
        <Typography.Body2>Показать</Typography.Body2>
        <PageSizeSelect
          onPageSizeChange={onPageSizeChange}
          pageSize={pageSize}
          pageSizeOptions={optionsPageSize}
        />
        <Typography.Body2>на странице</Typography.Body2>
      </div>
    </div>
  )
}

const classNames = {
  arrow: s.arrow,
  container: clsx(s.paginationContainer),
  dots: s.dots,
  item: s.paginationItem,
  left: s.left,
  right: s.right,
  selected: s.selected,
}

export interface PaginationProps {
  className?: string
  currentPage: number
  onPageChange: (page: number) => void
  onPageSizeChange: (pageSize: number) => void
  optionsPageSize?: number[]
  pageSize?: number
  siblingCount?: number
  totalCount?: number
}
