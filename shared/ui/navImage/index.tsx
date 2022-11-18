import Image, { StaticImageData } from 'next/image'
import { LinkBox, LinkOverlay } from 'shared/ui/linkOverlay'

export interface INavImageProps {
  imgAlt: string
  imgSrc: string | StaticImageData
  label: React.ReactNode
  link: string
}

// TODO: Заменить цвет #1b1b1b на colors.primary
export const NavImage = (props: INavImageProps) => {
  const { imgAlt, imgSrc, label, link } = props

  return (
    <LinkBox>
      <Image className='w-full' src={imgSrc} alt={imgAlt} />
      <LinkOverlay href={link}>
        <p
          className={`
                    absolute
                    top-0
                    left-0
                    flex
                    justify-center
                    items-center
                    h-full
                    w-full
                    text-4xl
                    text-white
                    [text-shadow:0_4px_10px_#1b1b1b]
                `}
        >
          {label}
        </p>
      </LinkOverlay>
    </LinkBox>
  )
}
