module.exports = {
  env: {browser: true, es6: true, node: true, jest: true},
  extends: ['eslint:recommended'],
  globals: {Atomics: 'readonly', SharedArrayBuffer: 'readonly'},
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {jsx: true},
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [],
  rules: {},
  settings: {react: {version: 'detect'}},
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      env: {browser: true, es6: true, node: true, jest: true},
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:prettier/recommended',
        'prettier/@typescript-eslint',
      ],
      globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
      },
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
      },
      plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/camelcase': 'off',
      },
      settings: {},
    },
  ],
};
