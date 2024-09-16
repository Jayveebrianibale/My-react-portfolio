// tailwind.config.js

export const content = [
  "./index.html",
  "./src/**/*.{js,jsx,ts,tsx}",
  "./node_modules/flowbite/**/*.js"
];
export const theme = {
  extend: {},
};
export const plugins = [
  // eslint-disable-next-line no-undef
  require('flowbite/plugin')
];
