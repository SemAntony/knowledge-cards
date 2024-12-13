import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgEllipse = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    fill={'none'}
    ref={ref}
    viewBox={'0 0 37 36'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      clipRule={'evenodd'}
      d={
        'M18.478 34.5c9.112 0 16.5-7.387 16.5-16.5S27.59 1.5 18.478 1.5 1.978 8.887 1.978 18s7.387 16.5 16.5 16.5m0 1.5c9.94 0 18-8.059 18-18s-8.06-18-18-18c-9.941 0-18 8.059-18 18s8.059 18 18 18'
      }
      fill={'#fff'}
      fillRule={'evenodd'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgEllipse)
const Memo = memo(ForwardRef)

export default Memo
