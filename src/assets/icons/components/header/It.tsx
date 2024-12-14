import type { SVGProps } from 'react'
import { Ref, forwardRef, memo } from 'react'
const SvgIt = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    ref={ref}
    viewBox={'0 0 16 14'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      d={
        'M0 .878h2.912v12.595H0zM8.506 3.253H4.479V.878h10.967v2.375h-4.028v10.22H8.506z'
      }
      fill={'#fff'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgIt)
const Memo = memo(ForwardRef)

export default Memo
