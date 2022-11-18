import { Logo } from 'shared/ui/logo'
import { footerItemsData } from '../data'
import { FooterItem } from './footerItem'

export const Footer = () => (
  <footer className='mt-auto pt-16 pb-10'>
    <div className='container px-8'>
      <div className='grid grid-cols-4 gap-5'>
        {footerItemsData.slice(0, 4).map((item, idx) => (
          <FooterItem {...item} key={idx} />
        ))}
      </div>

      <div className='grid grid-cols-4 gap-5 mt-8'>
        <Logo className='col-start-4 justify-self-end text-primary' />
      </div>
    </div>
  </footer>
)
