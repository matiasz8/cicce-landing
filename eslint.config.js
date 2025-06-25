import next from 'eslint-config-next';

export default [
  ...next,
  {
    plugins: {
      tailwindcss: require("eslint-plugin-tailwindcss"),
    },
    rules: {
      "tailwindcss/no-custom-classname": "off",
      "@next/next/no-img-element": "off",
    },
  },
];
