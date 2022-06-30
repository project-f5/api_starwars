/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
<<<<<<< Updated upstream
  "root": true,
  "extends": [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-prettier"
  ]
}
=======
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-prettier",
  ],
  env: {
    "vue/setup-compiler-macros": true,
  },
  "prettier/prettier": [
    "error",
    {
      endOfLine: "auto",
    },
  ],
};
>>>>>>> Stashed changes
