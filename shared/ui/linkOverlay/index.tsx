import Link, { LinkProps } from 'next/link'

export interface ILinkBoxProps {
  children: React.ReactNode
}

export const LinkBox = (props: ILinkBoxProps) => {
  const { children } = props

  return (
    <div
      className={`
            relative
            [&>a[href]:not(.link-overlay)]:relative
            [&>a[href]:not(.link-overlay)]:z-10
        `}
    >
      {children}
    </div>
  )
}

export interface ILinkOverlayProps extends LinkProps {
  children: React.ReactNode
}

export const LinkOverlay = (props: ILinkOverlayProps) => {
  const { children, ...restProps } = props

  return (
    <Link
      {...restProps}
      className={`
                link-overlay
                before:absolute
                before:z-0
                before:top-0
                before:left-0
                before:h-full
                before:w-full
                before:cursor-[inherit]
            `}
    >
      {children}
    </Link>
  )
}
