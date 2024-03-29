module.exports = {
  globals: {
    window: true,
    document: true,
    localStorage: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
  extends: process.env.NODE_ENV !== 'production'
    ? ['airbnb', 'plugin:react/recommended', 'plugin:import/recommended']
    : [],
  plugins: ['react'],
  rules: {
    'react/function-component-definition': [
      2, { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' },
    ],
    'no-unused-expressions': 'off',
    'no-param-reassign': 'off',
    indent: ['error', 2],
    'linebreak-style': [0, 'error'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'react/react-in-jsx-scope': 'off',
    'max-len': ['error', 130],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'arrow-parens': 'off',
    'no-useless-constructor': 'off',
    'no-underscore-dangle': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-array-index-key': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    'no-plusplus': 'off',
    'react/prop-types': 'off',
    'import/prefer-default-export': 'off',
    'no-alert': 'off',
    'import/no-named-as-default': 'off',
    'import/no-cycle': 'off',
    'no-console': 'warn',
    'no-unused-vars': 'warn',
  },
};
