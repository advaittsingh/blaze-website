import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        nasalization: ['var(--font-nasalization)', 'sans-serif'],
        poppins: ['var(--font-poppins-medium)', 'sans-serif'],
      },
      colors: {
        'blaaze-orange': '#dc2626',
        'blaaze-dark': '#1a1a1a',
        'blaaze-grey': '#2a2a2a',
      },
    },
  },
  plugins: [],
}
export default config
