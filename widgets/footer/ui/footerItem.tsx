import Link from 'next/link'
import { Input } from 'shared/ui/input'

export interface IFooterItem {
  title: string
  items: Record<'path' | 'text', string>[]
  newsLetter?: {
    title: string
    label: string
  }
}

export const FooterItem = (props: IFooterItem) => {
  const { title, items, newsLetter } = props

  return (
    <div>
      <h3 className='mb-4 font-bold'>{title}</h3>

      <ul>
        {items.map(({ path, text }, idx) => (
          <li key={idx} className='mb-3 last:mb-0'>
            <Link href={path}>{text}</Link>
          </li>
        ))}
      </ul>

      {newsLetter && (
        <div className='mt-6'>
          <h3 className='mb-4 font-bold'>{newsLetter.title}</h3>

          <Input placeholder={newsLetter.label} />
        </div>
      )}
    </div>
  )
}
