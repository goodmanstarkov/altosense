import clsx from 'clsx'
import { HeaderNavItem, IHeaderNavItem } from './headerNavItem'

export interface IHeaderNavItems {
  items: IHeaderNavItem[]
  className?: string
}

export const HeaderNavItems = (props: IHeaderNavItems) => {
  const { items, className } = props

  return (
    <ul className={clsx('-mx-1.5', className && className)}>
      {items.map((item, idx) => (
        <HeaderNavItem key={idx} className='px-1.5' {...item} />
      ))}
    </ul>
  )
}
