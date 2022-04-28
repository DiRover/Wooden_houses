module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parser: '@typescript-eslint/parser',
    extends: [
        "next/core-web-vitals",
        'airbnb-typescript',
        'plugin:import/errors',
        'plugin:import/typescript',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    plugins: ['emotion', 'react', 'react-hooks', 'import', '@typescript-eslint'],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
    },
    rules: {
        'prettier/prettier': [2],

        '@typescript-eslint/ban-ts-comment': [2],
        '@typescript-eslint/naming-convention': [
            2,
            {selector: 'enum', format: ['UPPER_CASE']},
            {selector: 'enumMember', format: ['UPPER_CASE']},
            {selector: 'typeParameter', format: ['UPPER_CASE']},
            {
                selector: 'class',
                format: ['PascalCase'],
            },
            {
                selector: 'interface',
                format: ['PascalCase'],
                custom: {
                    regex: '^I[A-Z]',
                    match: false,
                },
            },
            {
                selector: 'typeLike',
                format: ['camelCase'],
            },
        ],
        '@typescript-eslint/no-unused-vars': [2],
        '@typescript-eslint/no-explicit-any': [2],
        '@typescript-eslint/array-type': [
            2,
            {
                default: 'generic',
            },
        ],
        '@typescript-eslint/no-shadow': [0],
        '@typescript-eslint/no-redeclare': [0],

        'import/order': [
            2,
            {
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
                'newlines-between': 'always-and-inside-groups',
            },
        ],
        'import/named': [1],
        'import/no-unresolved': [2],
        'import/prefer-default-export': [1],
        'import/extensions': [0],
        'import/no-cycle': [1],

        'react/react-in-jsx-scope': [0],
        'react/jsx-uses-react': [0],
        'react/jsx-indent': [0],
        'react/jsx-indent-props': [0],
        'react/jsx-props-no-spreading': [
            2,
            {
                html: 'enforce',
                custom: 'ignore',
            },
        ],
        'react/jsx-curly-newline': [0],
        'react/jsx-one-expression-per-line': [1],
        'react/jsx-wrap-multilines': [1],
        'react/jsx-fragments': [0],
        'react/jsx-tag-spacing': [1, {beforeSelfClosing: 'always'}],
        'react/display-name': [0],
        'react/prop-types': [0],
        'react/self-closing-comp': [2],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',

        'emotion/jsx-import': 'error',
        'emotion/no-vanilla': 'error',
        'emotion/import-from-emotion': 'error',
        'emotion/styled-import': 'error',

        'no-restricted-imports': [
            'error',
            {
                paths: [
                    {
                        name: '@material-ui/core',
                        message: 'Please use package from @material-ui/[core/icons]/[component_name] instead.',
                    },
                    {
                        name: '@material-ui/icons',
                        message: 'Please use package from @material-ui/[core/icons]/[component_name] instead.',
                    },
                    {
                        name: 'react',
                        importNames: ['default'],
                        message: "Dont use 'import React from 'react''.",
                    },
                    {
                        name: 'date-fns',
                        message: 'Please use the default import from date-fns/[method] instead.',
                    },
                ],
            },
        ],

        'no-multiple-empty-lines': [2, {max: 1}],
        'max-lines': [1, {max: 350}],
        'no-console': [2],
        'no-bitwise': [0],
        'default-case': [0],
        'no-param-reassign': [1],
        'no-nested-ternary': [1],
        'consistent-return': [1],
        'require-yield': [1],
        'prefer-object-spread': [1],
        'no-underscore-dangle': [0],
        'no-plusplus': [0],
        'no-await-in-loop': [1],
        'no-async-promise-executor': [1],
        'no-undef': [1], // https://github.com/typescript-eslint/typescript-eslint/issues/1116
        radix: [1],
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    globals: {
        _IS_DEV: 'readonly',
        _VERSION: 'readonly',
        _BUILD_DATE: 'readonly',
        _SYSTEM: 'readonly',
        _SYSTEM_SUFFIX: 'readonly',
        _UNIQUE_STATE: 'readonly',
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: 'readonly',
        JSX: true,
    },
};
