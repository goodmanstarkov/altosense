import clsx from 'clsx'
import Link from 'next/link'

export interface IHeaderNavItem {
  title: string
  path: string
  isActive?: boolean
  className?: string
}

export const HeaderNavItem = (props: IHeaderNavItem) => {
  const { title, path, isActive, className } = props

  return (
    <Link
      href={path}
      className={clsx(
        'text-primary hover:opacity-100 transition-opacity ease-in-out duration-300',
        isActive ? 'opacity-100' : 'opacity-40',
        className
      )}
    >
      {title}
    </Link>
  )
}
