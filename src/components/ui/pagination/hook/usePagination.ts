import { useMemo } from 'react'

export function usePagination(args: PaginationByCount): (number | string)[] {
  const { currentPage, pageSize, siblingCount = 1, totalCount } = args

  return useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize)
    const totalPageNumbers = siblingCount + 5

    if (totalPageCount <= 1) {
      return []
    }

    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount)
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1)
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPageCount
    )

    const shouldShowLeftDots = leftSiblingIndex > 2
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2

    const firstPageIndex = 1
    const lastPageIndex = totalPageCount

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const itemCount = 3 + 2 * siblingCount
      const leftRange = range(1, itemCount)

      return [...leftRange, DOTS, lastPageIndex]
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const itemCount = 3 + 2 * siblingCount
      const rightRange = range(totalPageCount - itemCount + 1, totalPageCount)

      return [firstPageIndex, DOTS, ...rightRange]
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex)

      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex]
    }

    console.warn('Error in usePagination')

    return [] // IN CASE OF ERROR RETURN AN EMPTY ARRAY
  }, [siblingCount, currentPage, totalCount, pageSize])
}

function range(
  start: number,
  end: number,
  step: number = 1,
  inclusive: boolean = true
): number[] {
  const length = Math.ceil((end - start + (inclusive ? 1 : 0)) / step)

  return Array.from({ length }, (_, index) => start + index * step)
}

const DOTS = '...'

interface PaginationByCount {
  currentPage: number
  pageSize: number
  siblingCount?: number
  totalCount: number
}
