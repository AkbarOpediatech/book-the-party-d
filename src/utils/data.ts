import { IHeaderNavItems } from './type'

export const headerNavItems: IHeaderNavItems[] = [
  {
    id: 1,
    name: 'OUR MODELS',
    path: '/our-models',
    dropdown: [
      {
        id: 1,
        name: 'Something',
        path: '/some-thing'
      }
    ]
  }
]
