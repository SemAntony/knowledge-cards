import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgIn = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    ref={ref}
    viewBox={'0 0 19 14'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      d={
        'M.741.878h2.917v12.595H.74zM18.207.878v12.595h-2.395L9.53 5.826v7.647h-2.88V.877H9.06l6.265 7.647V.878z'
      }
      fill={'#fff'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgIn)
const Memo = memo(ForwardRef)

export default Memo
