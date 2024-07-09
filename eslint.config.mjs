/* eslint-disable prettier/prettier */
import eslint from '@eslint/js'
import tsEslintPlugin from '@typescript-eslint/eslint-plugin'
import tsEslintParser from '@typescript-eslint/parser'
import prettierConfig from 'eslint-config-prettier'
import html from 'eslint-plugin-html'
import prettier from 'eslint-plugin-prettier'
import globals from 'globals'
import tsEslint from 'typescript-eslint'

export default [
  // 定义文件继承的子规范
  eslint.configs.recommended,
  ...tsEslint.configs.recommended,
  prettierConfig,
  {
    plugins: {
      // 定义了该 ESLint 文件所依赖的插件
      tsEslintPlugin,
      html,
      prettier,
    },
    languageOptions: {
      globals: {
        // 指定代码的运行环境
        ...globals.browser,
        ...globals.node,
      },
      parser: tsEslintParser, // 定义 ESLint 的解析器
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // 指定 ESLint 可以解析 JSX 语法
        },
      },
    },
    rules: {
      // 自定义的一些规则
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
        },
      ],
      'valid-typeof': [
        'warn',
        {
          requireStringLiterals: false,
        },
      ],
      'arrow-parens': 'off',
      '@typescript-eslint/no-var-requires': 'off',
    },
  },
]
