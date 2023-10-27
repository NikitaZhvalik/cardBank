export default {
  content: ["./src/**/*.{js,ts,tsx,jsx}"],
  theme: {

    extend: {
      colors: {
        'blue': '#1fb6ff',
        'purple': 'rgb(140 10 200)',
        'light': '#fff',
        'dark': 'rgb(0 0 0)',
        'light-dark': 'rgb(35 35 35)',
        'gray': 'rgb(100 116 139)',
        'light-gray': '#e5e5e5',
        'red': 'rgb(220 38 38)',
        'light-red': 'rgb(250 165 165)',
      },
      backgroundImage: {
        'money': "url('/src/assets/imgs/getMoney/money.jpg')",
        'invite': "url('/src/assets/imgs/invite/code.png')",

      }
    }
  },
  plugins: [],
}

