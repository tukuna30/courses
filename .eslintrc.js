module.exports = {
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    settings: {
        react: {
            version: 'detect'
        }
    },
    env: {
        browser: true,
        node: true,
        commonjs: true,
        es6: true,
        jest: true
    },
    extends: [
        'airbnb',
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended'
    ],
    plugins: ['react', 'prettier', 'react-hooks'],
    rules: {
        'prettier/prettier': ['error', {}, { usePrettierrc: true }],
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'no-unused-vars': 'off',
        'import/named': 0
    }
};
