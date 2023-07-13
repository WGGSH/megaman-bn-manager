module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    // "plugin:prettier/recommended",
    '@vue/eslint-config-airbnb-with-typescript',
  ],
  env: {
    node: true,
  },
  rules: {
    'vue/multi-word-component-names': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-underscore-dangle': 'off',
    'vue/max-len': 'off',
    'no-plusplus': 'off',
    'vuejs-accessibility/mouse-events-have-key-events': 'off',
  },
};
