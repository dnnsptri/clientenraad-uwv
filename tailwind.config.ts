import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // UWV cliëntenraad brand colors
        primary: {
          50: '#f0f0f0',
          100: '#e0e0e0',
          200: '#c0c0c0',
          300: '#a0a0a0',
          400: '#808080',
          500: '#00A8FF', // Bright blue (main brand)
          600: '#007EBE', // Darker blue
          700: '#0066a3',
          800: '#00548c',
          900: '#00305e',
        },
        secondary: {
          50: '#fff0f0',
          100: '#ffe0e0',
          200: '#ffc0c0',
          300: '#ffa0a0',
          400: '#ff8080',
          500: '#650260', // Deep purple (secondary brand)
          600: '#7D256A', // Lighter purple
          700: '#642d91',
          800: '#4d3092',
          900: '#363393',
        },
        neutral: {
          50: '#FFFFFF',
          100: '#F6F6F6',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#0F0F11', // Near black
        }
      },
      fontFamily: {
        sans: ['Work Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Work Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        'prose': '65ch',
        'prose-sm': '45ch',
        'prose-lg': '75ch',
        'prose-xl': '80ch',
        'prose-2xl': '90ch',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#0F0F11',
            maxWidth: '65ch',
            lineHeight: '1.75',
            fontFamily: 'Work Sans, ui-sans-serif, system-ui, sans-serif',
            'h1, h2, h3, h4': {
              color: '#0F0F11',
              fontWeight: '700',
              lineHeight: '1.25',
            },
            'h1': {
              fontSize: '2.25rem',
              marginTop: '2rem',
              marginBottom: '1rem',
            },
            'h2': {
              fontSize: '1.875rem',
              marginTop: '1.75rem',
              marginBottom: '0.75rem',
            },
            'h3': {
              fontSize: '1.5rem',
              marginTop: '1.5rem',
              marginBottom: '0.5rem',
            },
            'blockquote': {
              borderLeftColor: '#00A8FF',
              borderLeftWidth: '4px',
              paddingLeft: '1rem',
              fontStyle: 'italic',
              color: '#525252',
            },
            'a': {
              color: '#00A8FF',
              textDecoration: 'underline',
              '&:hover': {
                color: '#007EBE',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default config