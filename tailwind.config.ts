import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

const { lightBlue, warmGray, blueGray, coolGray, trueGray, ...colorConfigs } =
  colors;

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './mdx/**/*.{js,mjs,jsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        '2xs': '.6875rem',
      },
      fontFamily: {
        sans: 'var(--font-inter)',
        display: 'var(--font-mona-sans)',
      },
      opacity: {
        2.5: '0.025',
        7.5: '0.075',
        15: '0.15',
      },
    },
    colors: {
      ...colorConfigs,
      black: '#141719',
    },
  },
  plugins: [require('@tailwindcss/forms')],
};

export default config;
