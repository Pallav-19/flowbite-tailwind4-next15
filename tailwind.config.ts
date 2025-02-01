import type {Config} from 'tailwindcss'
import flowbite from 'flowbite/plugin'

const config: Config = {
    content: ['./src/**/*.html', './node_modules/flowbite/**/*.js'],
    theme: {
      extend: {},
    },
    plugins: [
      flowbite
    ]
  };

export default config;
  
  