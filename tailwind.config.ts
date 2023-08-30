import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes:
      {
        bouncing: {
        '0%, 100%': {translate: '0 0px'},        
        '50%': {translate: '0 10px'},
      },
        comingin:{
          'from': {opacity: '0'},
          'to': {opacity: '1'},
      },
      slidein:{
        from: {width: '0%'},
        to: {width: '35%'},
      }
    },
    slideout:{
      from: {width: '35%'},
      to: {width: '0%'},
    },
    comingout:{
      'from': {opacity: '1'},
      'to': {opacity: '0'},
  },
      animation:
      {
        bouncing: 'bouncing 1.5s infinite',
      },
    }
  },
  plugins: [],
}
export default config
