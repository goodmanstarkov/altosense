import { cormorantscFont } from 'fonts/cormorantscFont'
import 'shared/ui/global.css'

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
    <html lang='ru' className={cormorantscFont.className}>
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
