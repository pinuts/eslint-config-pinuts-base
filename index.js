module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: [
        'eslint:recommended'
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
            modules: true,
        },
        ecmaVersion: 6,
        sourceType: 'module',
    },
    root: true,
    rules: {
        indent: ['error', 4, { SwitchCase: 1 }],
        'no-console': 0,
        'no-var': 'error',
        'no-undef': 'error',
        'lines-between-class-members': ['error', 'always'],
        'padding-line-between-statements': [
            'error',
            { blankLine: 'always', prev: 'block', next: '*' },
            { blankLine: 'always', prev: 'block-like', next: '*' },
            { blankLine: 'always', prev: 'multiline-block-like', next: '*' },
            { blankLine: 'always', prev: 'multiline-expression', next: '*' },
            { blankLine: 'always', prev: '*', next: 'return' },
        ],
        'prefer-const': 'error',
        'prefer-destructuring': 'error',
        quotes: ['error', 'single'],
        'space-before-function-paren': ['error', {named: 'never', anonymous: 'never'}]
    },
};
