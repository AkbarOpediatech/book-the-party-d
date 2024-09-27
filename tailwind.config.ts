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
        'clr-eb': '#FFEAEB',
        'clr-ab': '#919EAB',
        'clr-36': '#212B36',
        'clr-3f': '#4A5F3F',
        'clr-82': '#ffffff82',
      },
      backgroundImage: {
        'icon-search': "url('/assets/ic_search.svg')"
      },
      boxShadow: {
        one: '0px 0px 1.742px 0px rgba(145, 158, 171, 0.20), 0px 10.449px 20.899px -3.483px rgba(145, 158, 171, 0.12)'
      }
    }
  },
  plugins: []
}
export default config
