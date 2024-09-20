/** @type {import('tailwindcss').Config} */
export default {
  prefix: 'rcl-',
  corePlugins: {
    // preflight: false,
  },
  content: [
    'src/**/*.(js|jsx|ts|tsx)',
    '!src/**/*.spec.(ts|tsx)',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
