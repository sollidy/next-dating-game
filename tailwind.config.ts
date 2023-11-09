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
    backgroundImage: {
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
    },
    transitionTimingFunction: {
      DEFAULT: 'ease-in-out',
    },
    transitionDuration: {
      DEFAULT: '200ms',
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
