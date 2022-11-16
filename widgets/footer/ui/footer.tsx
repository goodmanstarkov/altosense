import { Logo } from 'shared/ui/logo'
import { data } from '../data'
import { FooterItem } from './footerItem'

export interface IFooter {
  // eslint-disable-next-line react/require-default-props
  className?: string
}

export const Footer = (props: IFooter) => {
  const { className = '' } = props

  return (
    <footer className={`${className} tw-pt-16 tw-pb-10`}>
      <div className='tw-container tw-px-8'>
        <div className='tw-grid tw-grid-cols-4 tw-gap-5'>
          {data.slice(0, 4).map((item, idx) => (
            <FooterItem
              {...item}
              // eslint-disable-next-line react/no-array-index-key
              key={idx}
            />
          ))}
        </div>

        <div className='tw-grid tw-grid-cols-4 tw-gap-5 tw-mt-8'>
          <Logo className='tw-col-start-4 tw-justify-self-end tw-text-primary' />
        </div>
      </div>
    </footer>
  )
}
