import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'
const SvgVec = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    ref={ref}
    viewBox={'0 0 18 18'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      d={
        'M16 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M7 14 2 9l1.41-1.41L7 11.17l7.59-7.59L16 5z'
      }
      fill={'#fff'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgVec)
const Memo = memo(ForwardRef)

export default Memo
