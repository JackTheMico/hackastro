/** @type {import('stylelint').Config} */
export default {
  plugins: ["stylelint-scss"],
  extends: [
    "stylelint-config-html",
    "stylelint-config-sass-guidelines",
    "stylelint-config-tailwindcss/scss",
  ],
  rules: {
    "no-descending-specificity": null,
    "selector-no-qualifying-type": [true, { ignore: ["attribute", "class"] }],
    "selector-max-id": 2,
    "color-named": "always-where-possible",
    "max-nesting-depth": 2,
    "at-rule-no-unknown": null,
    "@stylistic/string-quotes": "double",
  },
};
