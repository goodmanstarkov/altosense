import { cormorantscFont } from 'fonts/cormorantscFont'
import { Footer } from 'widgets/footer'
import 'shared/global.css'

/**
 * Свойства корневого шаблона.
 * @param children Дочерние элементы.
 */
interface IRootLayout {
  children: React.ReactNode
}

/**
 * Корневой шаблон всего приложения.
 * @param props Свойства корневого шаблона.
 * @returns Корневой шаблон.
 */
const RootLayout = (props: IRootLayout) => {
  const { children } = props

  return (
    <html lang='ru' style={cormorantscFont.style}>
      <body className='tw-text-primary'>
        <div className='tw-flex tw-flex-col tw-min-h-full'>
          <header>Header</header>

          <main>{children}</main>

          <Footer className='tw-mt-auto' />
        </div>
      </body>
    </html>
  )
}

export default RootLayout
