import { cormorantscFont } from 'fonts/cormorantscFont'
import { Header } from 'widgets/header'
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
      <body className='text-primary'>
        <div className='flex flex-col min-h-full'>
          <div>
            <Header />

            <main>{children}</main>
          </div>

          <Footer />
        </div>
      </body>
    </html>
  )
}

export default RootLayout
