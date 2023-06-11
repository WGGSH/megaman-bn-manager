module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "plugin:prettier/recommended",
  ],
  env: {
    node: true,
  },
  rules: {
    "vue/multi-word-component-names": "off",
  },
};
