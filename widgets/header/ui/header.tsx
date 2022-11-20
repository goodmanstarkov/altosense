'use client'

import Link from 'next/link'
import { useCallback, useEffect, useRef } from 'react'
import { Logo } from 'shared/ui/logo'
import { headerNavItemsData } from '../data'
import { HeaderNavItems } from './headerNavItems'

interface IHeader {
  fullHeaderHeightPx: string
  smallHeaderHeightPx: string
}

const scrollTopForTransformHeaderElements = 20

export const Header = (props: IHeader) => {
  const { fullHeaderHeightPx, smallHeaderHeightPx } = props

  const headerRef = useRef<HTMLElement>(null)
  const logoRef = useRef<HTMLAnchorElement>(null)

  const transformHeaderAfterScroll = () => {
    if (document.documentElement.scrollTop > scrollTopForTransformHeaderElements) {
      headerRef.current.style.height = smallHeaderHeightPx
      logoRef.current.style.transform = `translateY(-${fullHeaderHeightPx})`
    } else {
      headerRef.current.style.height = fullHeaderHeightPx
      logoRef.current.style.transform = 'translateY(0px)'
    }
  }

  const handleScroll = useCallback(() => {
    requestAnimationFrame(transformHeaderAfterScroll)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <header
      ref={headerRef}
      style={{ height: fullHeaderHeightPx }}
      className='bg-white fixed z-10 w-full transition-all ease-in-out duration-300'
    >
      <div className='container px-8 h-full'>
        <nav className='grid grid-cols-3 items-center h-full'>
          <HeaderNavItems items={headerNavItemsData.slice(0, 3)} />

          <Link
            ref={logoRef}
            style={{ transform: 'translateY(0px)' }}
            href='/'
            className='justify-self-center transition-all ease-in-out duration-300'
          >
            <Logo className='text-secondary' />
          </Link>

          <HeaderNavItems className='justify-self-end' items={headerNavItemsData.slice(3, 5)} />
        </nav>
      </div>
    </header>
  )
}
