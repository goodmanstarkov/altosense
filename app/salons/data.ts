import img1 from 'public/images/ostozhenka_5.png'
import img2 from 'public/images/ostozhenka_11.png'
import img3 from 'public/images/tverskoy_boulevard_3.png'

export const salonsPage = {
  title: 'Наши салоны',

  items: [
    {
      image: {
        src: img1,
        alt: 'Остоженка, 5',
      },
      path: '#1',
      title: 'Остоженка, 5',
    },
    {
      image: {
        src: img2,
        alt: 'Тверской бульвар, 3',
      },
      path: '#2',
      title: 'Тверской бульвар, 3',
    },
    {
      image: {
        src: img3,
        alt: 'Остоженка, 11',
      },
      path: '#3',
      title: 'Остоженка, 11',
    },
  ],
}
