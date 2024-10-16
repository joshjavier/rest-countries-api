// @ts-check
import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import stylistic from '@stylistic/eslint-plugin'

export default tseslint.config(
  { ignores: ['dist'] },
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    files: ['**/*.js'],
    ...tseslint.configs.disableTypeChecked,
  },
  stylistic.configs['recommended-flat'],

  // my preferences
  {
    rules: {
      '@stylistic/brace-style': ['error', '1tbs'],
      '@stylistic/multiline-ternary': ['error', { ignoreJSX: true }],
      '@stylistic/quotes': ['error', 'single', {
        allowTemplateLiterals: true,
        avoidEscape: true,
      }],
      '@stylistic/jsx-one-expression-per-line': ['error', { allow: 'single-line' }],
    },
  },
)
