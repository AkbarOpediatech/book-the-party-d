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
        'clr-ff': '#F6F0FF'
      }
    }
  },
  plugins: []
}
export default config
