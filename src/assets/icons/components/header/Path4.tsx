import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'
const SvgPath4 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    ref={ref}
    viewBox={'0 0 4 5'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      clipRule={'evenodd'}
      d={'M1.987.535a1.96 1.96 0 1 1 0 3.92 1.96 1.96 0 0 1 0-3.92'}
      fill={'#F23D61'}
      fillRule={'evenodd'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgPath4)
const Memo = memo(ForwardRef)

export default Memo
