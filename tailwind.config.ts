import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'
import colors from 'tailwindcss/colors'

const bgLight = '#fafafa'
const bgDark = '#151419'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  extend: {
    transitionTimingFunction: {
      DEFAULT: 'ease-in-out',
    },
    transitionDuration: {
      DEFAULT: '200ms',
    },
  },
  theme: {
    colors: {
      bgLight,
      bgDark,
      transparent: 'transparent',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      dark: '#151419',
      viola: {
        300: '#ea71ff',
        400: '#9325A6',
        500: '#7f1092',
        600: '#605c70',
        700: '#484554',
        800: '#302e38',
        900: '#25222a',
      },
    },
    extend: {
      backgroundImage: {
        'dark-image': "url('@/assets/imgs/bgImgBlack.svg')",
        'light-image': "url('@/assets/imgs/bgImgWhite.svg')",
      },
    },
  },
  plugins: [
    plugin(({ addBase, addComponents, addUtilities, theme }) => {
      addBase({
        h2: {
          fontSize: '1.75rem',
          fontWeight: 'bold',
          textAlign: 'center',
        },
      })
      addComponents({
        '.btn': {
          outline: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: theme('colors.gray.200'),
          color: theme('colors.gray.600'),
          fontSize: theme('fontSize.xl'),
          transition: 'all .2s ease-in-out',
          '&:disabled': {
            opacity: '0.3',
            pointerEvents: 'none',
          },
          '@media (hover: hover)': {
            '&:hover': {
              backgroundColor: theme('colors.gray.300'),
            },
          },
          '@media screen and (max-width: 430px)': {
            transitionProperty: 'none',
            '&:active': {
              backgroundColor: theme('colors.gray.300'),
            },
          },
        },
        '.btn-dark': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: theme('colors.viola.800'),
          color: theme('colors.gray.400'),
          fontSize: theme('fontSize.xl'),
          transition: 'all .2s ease-in-out',
          '&:disabled': {
            opacity: '0.4',
            pointerEvents: 'none',
          },
          '@media (hover: hover)': {
            '&:hover': {
              backgroundColor: theme('colors.viola.700'),
            },
          },
          '@media screen and (max-width: 430px)': {
            transitionProperty: 'none',
            '&:active': {
              backgroundColor: theme('colors.viola.700'),
            },
          },
        },
        '.btn-shadow': {
          borderStyle: 'none',
          cursor: 'pointer',
          overflow: 'hidden',
          borderRadius: '50%',
          boxShadow: '0 0 4px 0px',
        },
        //@ts-ignore
        '.fill-hover': {
          fill: theme('colors.viola.700'),
          transition: 'fill .2s ease-in-out',
          '&:disabled': {
            opacity: '0.3',
            pointerEvents: 'none',
          },
          '@media (hover: hover)': {
            '&:hover': {
              fill: theme('colors.viola.600'),
            },
          },
          '@media screen and (max-width: 430px)': {
            transitionProperty: 'none',
            '&:active': {
              fill: theme('colors.viola.600'),
            },
          },
        },
      })
      addUtilities({
        '.flex-center': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
      })
    }),
  ],
}
export default config
