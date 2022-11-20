import salonsImg from 'public/images/salons.png'
import servicesImg from 'public/images/services.png'

export const homePageItems = [
  {
    image: {
      src: salonsImg,
      alt: 'Салоны',
    },
    path: '/salons',
    title: 'Салоны',
  },
  {
    image: {
      src: servicesImg,
      alt: 'Услуги',
    },
    path: '#',
    title: 'Услуги',
  },
]
