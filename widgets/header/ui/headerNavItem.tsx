import Link from 'next/link'

export interface IHeaderNavItem {
  title: string
  path: string
  className?: string
}

export const HeaderNavItem = (props: IHeaderNavItem) => {
  const { title, path, className } = props

  return (
    <Link
      href={path}
      className={`text-primary opacity-40 hover:opacity-100 transition-opacity ease-in-out duration-300 ${className}`}
    >
      {title}
    </Link>
  )
}
