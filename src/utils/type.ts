export interface INavDropdown {
  id: number
  name: string
  path: string
}

export interface IHeaderNavItems {
  id: number
  name: string
  path: string
  dropdown: INavDropdown[]
}
