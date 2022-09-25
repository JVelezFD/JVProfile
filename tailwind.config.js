module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      richBlack: '#000814',
      oxfordBlue: '#001D3D',
      prussianBlue: '#003566',
      mikadoYellow: '#FFC300',
      goldGolden: '#FFD60A',
      pumpkin: '#fe7f2d',
      olivine: '#A1C181',
      lightGrey: '#d9d9d9',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}