/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    
    extend: {colors: {
      'login-dark': '#1B1839',
      'login-lessdark': '#234B99',
      'font-general': '#FFFFFF',
      'placeholder-login':'#E2E2E2',
      'background-form':'#D9D9D9'
    },},
  },
  plugins: [],
};
