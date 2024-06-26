/** @type {import('tailwindcss').Config} */
const { nextui } = require('@nextui-org/react')
const themeLight = require('./src/theme/colors/light')
const themeDark = require('./src/theme/colors/dark')
import { Config } from 'tailwindcss'

const config: Config = {
  mode: 'jit',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1200px',
      '2xl': '1536px'
    }
  },
  darkMode: 'class',
  plugins: [
    nextui({
      addCommonColors: true,
      themes: {
        light: themeLight,
        dark: themeDark
      }
    })
  ]
}

export default config
