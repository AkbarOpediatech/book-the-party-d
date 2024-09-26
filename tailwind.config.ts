import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        'clr-14': '#919EAB14',
        'clr-48': '#394148',
        'clr-81': '#637381',
        'clr-fb': '#9042FB',
        'clr-ff': '#F6F0FF',
        'clr-f8': '#F6F7F8',
        'clr-96': '#848A96',
        'clr-e8': '#D3FFE8',
        'clr-eb': '#FFEAEB'
      },
      backgroundImage: {
        'icon-search': "url('/assets/ic_search.svg')"
      }
    }
  },
  plugins: []
}
export default config
