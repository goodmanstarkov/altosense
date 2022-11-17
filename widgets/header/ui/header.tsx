import Link from 'next/link'
import { Logo } from 'shared/ui/logo'
import { headerNavItemsData } from '../data'
import { HeaderNavItems } from './headerNavItems'

export const Header = () => (
  <header className='text-white sticky top-0 h-[8.5rem] z-10'>
    <div className='container px-8 h-full'>
      <nav className='grid grid-cols-3 items-center h-full'>
        <HeaderNavItems items={headerNavItemsData.slice(0, 3)} />

        <Link href='#0' className='justify-self-center'>
          <Logo className='text-secondary' />
        </Link>

        <HeaderNavItems className='justify-self-end' items={headerNavItemsData.slice(3, 5)} />
      </nav>
    </div>
  </header>
)
