import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'
const SvgPath12 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    ref={ref}
    viewBox={'0 0 5 4'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      clipRule={'evenodd'}
      d={
        'M2.492.037c1.116 0 2.02.878 2.02 1.96 0 1.083-.904 1.96-2.02 1.96-1.115 0-2.02-.877-2.02-1.96s.905-1.96 2.02-1.96'
      }
      fill={'#fff'}
      fillRule={'evenodd'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgPath12)
const Memo = memo(ForwardRef)

export default Memo
