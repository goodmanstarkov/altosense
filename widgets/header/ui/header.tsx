import Link from 'next/link'
import { Logo } from 'shared/ui/logo'
import { headerNavItemsData } from '../data'
import { HeaderNavItem } from './headerNavItem'

export const Header = () => (
  <header className='pt-8 pb-13'>
    <div className='container px-8'>
      <nav className='grid grid-cols-3'>
        <div className='-mx-1.5'>
          {headerNavItemsData.slice(0, 3).map((item, idx) => (
            <HeaderNavItem key={idx} className='px-1.5' {...item} />
          ))}
        </div>

        <div className='relative'>
          <Link href='#0' className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4'>
            <Logo className='text-secondary' />
          </Link>
        </div>

        <div className='flex justify-end -mx-6 items-start'>
          {headerNavItemsData.slice(3, 5).map((item, idx) => (
            <HeaderNavItem key={idx} className='px-6' {...item} />
          ))}
        </div>
      </nav>
    </div>
  </header>
)
