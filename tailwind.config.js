/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
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
        'nx-background': '#edebfa',
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

        'n-success': '#39f78a',
        'n-success-muted': '#30d375',
        'n-error': '#fe3c3c',
        'n-error-muted': '#e23636',
        'n-warning': '#ffc765',
        'n-warning-muted': '#edb95e',
        

        'n-dark-text': '#e6e3f7',
        'n-dark-background': '#070514',
        'nx-dark-background': '#070514',
        'n-dark-container': '#120f26',
        'n-dark-container-hover': '#16112b',
        'n-dark-primary': '#3c2b9c',
        'n-dark-secondary': '#1d154c',
        'n-dark-accent': '#6d5bd2',
      },
      fontFamily: {
        'abc': ['ABCDiatypeVariable'],
        'inter': ['InterVariable'],
        'marlin': ['Marlin'],
        'marlinsoft': ['Marlin Soft Basic'],
        'undertale': ['DeterminationSansWeb'],
      },
    },
  }
}