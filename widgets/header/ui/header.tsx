'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Logo } from 'shared/ui/logo'
import { useThrottle } from 'shared/lib/useThrottle'
import { headerNavItemsData } from '../data'
import { HeaderNavItems } from './headerNavItems'

export const Header = () => {
  const [isTransformedHeader, setIsTransformedHeader] = useState<boolean>(false)

  const logoOffsetClass = isTransformedHeader ? `-top-[136px]` : 'top-[0px]'
  const headerHeightClass = isTransformedHeader ? `h-[68px]` : 'h-[136px]'

  const handleTransformHeader = () => {
    if (window.scrollY > 40) {
      setIsTransformedHeader(true)
    } else {
      setIsTransformedHeader(false)
    }
  }

  const handleTransformHeaderThrottle = useThrottle(handleTransformHeader, 100)

  useEffect(() => {
    window.addEventListener('scroll', handleTransformHeaderThrottle)

    return () => window.removeEventListener('scroll', handleTransformHeaderThrottle)
  }, [handleTransformHeaderThrottle])

  return (
    <header className={`bg-white sticky top-0 z-10 transition-all ease-in-out duration-300 ${headerHeightClass}`}>
      <div className='container px-8 h-full'>
        <nav className='grid grid-cols-3 items-center h-full'>
          <HeaderNavItems items={headerNavItemsData.slice(0, 3)} />

          <Link
            href='#0'
            className={`justify-self-center relative transition-all ease-in-out duration-500 ${logoOffsetClass}`}
          >
            <Logo className='text-secondary' />
          </Link>

          <HeaderNavItems className='justify-self-end' items={headerNavItemsData.slice(3, 5)} />
        </nav>
      </div>
    </header>
  )
}
