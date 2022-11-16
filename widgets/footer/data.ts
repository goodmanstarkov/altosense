import { IFooterItem } from './ui/footerItem'

export const data: IFooterItem[] = [
  {
    title: 'Услуги:',
    items: [
      {
        path: '#a0',
        text: 'Парикмахерский зал',
      },
      {
        path: '#b0',
        text: 'Услуги визажиста',
      },
      {
        path: '#c0',
        text: 'Ногтевой сервис',
      },
      {
        path: '#d0',
        text: 'Косметология',
      },
      {
        path: '#e0',
        text: 'Массаж',
      },
    ],
  },
  {
    title: 'Наши салоны:',
    items: [
      {
        path: '#a1',
        text: 'Тверской бульвар  3',
      },
      {
        path: '#b1',
        text: 'Остоженка 5',
      },
      {
        path: '#c1',
        text: 'Остоженка 11',
      },
    ],
  },
  {
    title: 'Помощь клиенту:',
    items: [
      {
        path: '#a2',
        text: 'Запись на услугу',
      },
      {
        path: '#b2',
        text: 'Помощь с парковкой',
      },
      {
        path: '#c2',
        text: 'Контакты',
      },
    ],
  },
  {
    title: 'Об Alto Senso:',
    items: [
      {
        path: '#a3',
        text: 'Философия AS',
      },
      {
        path: '#b3',
        text: 'AS в социальных сетях',
      },
    ],
    newsletter: {
      title: 'Новостная рассылка:',
      label: '*Введите ваш e-mail адрес ',
    },
  },
]
