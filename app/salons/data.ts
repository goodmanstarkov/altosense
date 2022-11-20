import ostozhenka5Img from 'public/images/ostozhenka_5.png'
import ostozhenka11Img from 'public/images/ostozhenka_11.png'
import tverskoyBoulevard3Img from 'public/images/tverskoy_boulevard_3.png'

export const salonsPage = {
  title: 'Наши салоны',

  items: [
    {
      image: {
        src: ostozhenka5Img,
        alt: 'Остоженка, 5',
      },
      path: '#1',
      title: 'Остоженка, 5',
    },
    {
      image: {
        src: tverskoyBoulevard3Img,
        alt: 'Тверской бульвар, 3',
      },
      path: '#2',
      title: 'Тверской бульвар, 3',
    },
    {
      image: {
        src: ostozhenka11Img,
        alt: 'Остоженка, 11',
      },
      path: '#3',
      title: 'Остоженка, 11',
    },
  ],
}
