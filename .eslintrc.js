module.exports = {
    root: true,
    extends: '@react-native-community',
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'simple-import-sort'],
    overrides: [
        {
            files: ['*.ts', '*.tsx', '*.js'],
            rules: {
                '@typescript-eslint/no-shadow': ['error'],
                'no-shadow': 'off',
                'no-undef': 'off',
                semi: ['off'],
                'no-duplicate-imports': 'error',
                'simple-import-sort/imports': [
                    'error',
                    {
                        groups: [
                            // Packages `react` related packages come first.
                            ['^react', '^@react', '^@redux', '^redux', '@testing-library/', '^@?\\w'],
                            // Internal packages.
                            ['^@api', '^@components', '^@hooks', '^@navigator', '^@resources', '^@store', '^@types'],
                            // Side effect imports.
                            ['^\\u0000'],
                            // Other relative imports. Put same-folder imports and `.` last.
                            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
                            // Parent imports. Put `..` last.
                            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
                            // Style imports.
                            ['^.+\\.?(css)$'],
                        ],
                    },
                ],
            },
        },
    ],
}
