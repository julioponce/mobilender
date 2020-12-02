module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: [
    'plugin:vue/essential',
    '@vue/standard',
  ],

  parserOptions: {
    parser: 'babel-eslint',
  },

  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    curly: ['error', 'multi-line'],
    semi: ['error', 'always'],
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/no-async-in-computed-properties': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/max-attributes-per-line': 'off',
  },
};
