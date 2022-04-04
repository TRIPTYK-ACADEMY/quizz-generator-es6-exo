module.exports = {
  mode: 'jit',
  content: ['./*.html', './assets/js/*.js', './assets/js/components/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#DEB989',
        secondary: '#7FFF00',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
