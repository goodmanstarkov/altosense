import { cormorantscFont } from 'fonts/cormorantscFont'
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
      <body>
        <div className='flex flex-col min-h-full'>
          <header>Header</header>

          <main>{children}</main>

          <footer className='mt-auto'>Footer</footer>
        </div>
      </body>
    </html>
  )
}

export default RootLayout
