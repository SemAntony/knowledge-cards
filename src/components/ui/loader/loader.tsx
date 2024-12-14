import { ReactNode } from 'react'

import s from './loader.module.scss'

export const Loader = (): ReactNode => {
  return (
    <div className={s.loaderWrapper}>
      <span className={s.loader}></span>
    </div>
  )
}
