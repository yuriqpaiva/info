module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            // transform: 'translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            // transform: 'translateY(0)'
          },
        }
      },
      animation: {
        'fade-in-down': 'fade-in-down 2.0s ease-out'
      },
      width: {
        md: '30rem',
        lg: '40rem'
      }
    },
  },
  
  variants: {
    extend: {},
  },
  plugins: [],
}