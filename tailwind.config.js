/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fbf8ee',
          100: '#f5eed2',
          200: '#eddca7',
          300: '#e2c373',
          400: '#d7a845',
          500: '#c58f27',
          600: '#aa711e',
          700: '#87511b',
          800: '#70411d',
          900: '#5e361c',
          DEFAULT: '#c58f27',
        },
        royal: {
          50: '#f4f6fa',
          100: '#e5eaf3',
          200: '#cbd6e8',
          300: '#a3b9d7',
          400: '#7596c2',
          500: '#5277ad',
          600: '#3f5e90',
          700: '#344c75',
          800: '#1b2a4a',
          900: '#101c33',
          DEFAULT: '#1b2a4a',
        },
        maroon: {
          50: '#fdf3f4',
          100: '#fbe4e7',
          200: '#f7ced4',
          300: '#f0aab5',
          400: '#e4788c',
          500: '#d34d67',
          600: '#bb3351',
          700: '#9c243f',
          800: '#842138',
          900: '#5c1324',
          DEFAULT: '#842138',
        },
        emerald: {
          DEFAULT: '#0f4c3a',
          dark: '#082d22',
          light: '#1b6b53'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        display: ['"Cinzel"', 'serif'],
      }
    },
  },
  plugins: [],
}
