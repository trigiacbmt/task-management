const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        textDarkest: '#172b4d',
        textMedium: '#5e6c84',
        borderLightest: '#dfe1e6',
        borderLight: '#c1c7d0',
        backgroundLightest: '#f4f5f7',
      },
      fontSize: {
        13: '13px',
        15: '15px',
      },
    },
  },
  plugins: [],
};
