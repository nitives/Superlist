/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './dist/*.{html,js}',
  ],
  theme: {
    extend: {
      spacing: {
        'sec1': '24px',
        'sec2': '48px',
      },
      colors: {
        'transparent': 'transparent',
        'n-text': '#0b081c',
        'n-background': '#edebfa',
        'n-container': '#dddbeb',
        'n-container-hover': '#e1dff0',
        'n-primary': '#7463d4',
        'n-secondary': {
          '50': '#f6f5fd',
          '100': '#efedfa',
          '200': '#e0def6',
          '300': '#bbb3ea',
          '400': '#aea1e4',
          '500': '#917bd7',
          '600': '#7e5ec9',
          '700': '#6e4cb5',
          '800': '#5c3f98',
          '900': '#4c357d',
          '950': '#302154',
      },
        'n-accent': '#3f2da4',
        'n-high': '#39F782',
  
        'n-dark-text': '#e6e3f7',
        'n-dark-background': '#070514',
        'n-dark-container': '#120f26',
        'n-dark-container-hover': '#16112b',
        'n-dark-primary': '#3c2b9c',
        'n-dark-secondary': '#1d154c',
        'n-dark-accent': '#6d5bd2',
      },
      fontFamily: {
        'abc': ['ABCDiatypeVariable'],
        'undertale': ['DeterminationSansWeb'],
      },
    },
  }
}