import { Input } from 'shared/ui/input'

export interface IFooterItem {
  title: string
  items: Record<'path' | 'text', string>[]
  // eslint-disable-next-line react/require-default-props
  newsletter?: {
    title: string
    label: string
  }
}

export const FooterItem = (props: IFooterItem) => {
  const { title, items, newsletter } = props

  return (
    <div>
      <h3 className='tw-mb-4 tw-font-bold'>{title}</h3>

      <ul>
        {items.map(({ path, text }, idx) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={idx} className='tw-mb-3 last:tw-mb-0'>
            <a href={path}>{text}</a>
          </li>
        ))}
      </ul>

      {newsletter && (
        <div className='tw-mt-6'>
          <h3 className='tw-mb-4 tw-font-bold'>{newsletter.title}</h3>

          <Input placeholder={newsletter.label} />
        </div>
      )}
    </div>
  )
}
