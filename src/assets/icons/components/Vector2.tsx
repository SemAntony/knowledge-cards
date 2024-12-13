import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'
const SvgVector2 = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    fill={'none'}
    ref={ref}
    viewBox={'0 0 18 18'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      d={
        'M16 2v14H2V2zm0-2H2C.9 0 0 .9 0 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2'
      }
      fill={'#C3C1C7'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgVector2)
const Memo = memo(ForwardRef)

export default Memo
