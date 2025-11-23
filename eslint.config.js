// eslint.config.js – PHIÊN BẢN HOÀN HẢO 2025 (copy-paste là chạy ngon)
import vue from 'eslint-plugin-vue';
import typescript from '@typescript-eslint/eslint-plugin';
import parserTs from '@typescript-eslint/parser';
import parserVue from 'vue-eslint-parser';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
  // 1. Tắt hết rule ESLint xung đột với Prettier (bắt buộc để ở đầu)
  prettierConfig,

  // 2. Ignore các thư mục không bao giờ được lint
  {
    ignores: ['node_modules/**', '.nuxt/**', '.output/**', 'dist/**', 'coverage/**', '**/*.d.ts', '**/.env*'],
  },

  // 3. Config chung cho JS/TS/Vue
  {
    files: ['**/*.{js,ts,vue}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      vue,
      prettier,
    },
    rules: {
      // Prettier là vua cuối cùng
      'prettier/prettier': 'error',

      // TẮT HẾT các rule dễ xung đột với Prettier
      quotes: 'off',
      semi: 'off',
      indent: 'off',
      'arrow-parens': 'off',
      'comma-dangle': 'off',

      // Giữ lại vài rule hữu ích
      'no-console': 'warn', // bạn có thể đổi thành 'off' nếu thích
      'no-debugger': 'error',
      'no-unused-vars': 'off', // để TypeScript lo
    },
  },

  // 4. TypeScript
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: parserTs,
      parserOptions: {
        project: './tsconfig.json',
        extraFileExtensions: ['.vue'],
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
    },
    rules: {
      ...typescript.configs.recommended.rules,

      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/consistent-type-imports': 'error',
    },
  },

  // 5. Vue – Phần quan trọng nhất
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: parserVue,
      parserOptions: {
        parser: parserTs,
        ecmaVersion: 'latest',
        sourceType: 'module',
        vueFeatures: {
          interpolationAsNonCompilerMacro: true,
        },
      },
    },
    processor: vue.processors['.vue'],
    plugins: { vue },
    rules: {
      ...vue.configs['vue3-recommended'].rules,

      // Cho phép <template> đứng trước <script setup>
      'vue/component-tags-order': ['error', { order: ['template', 'script', 'style'] }],

      // Tắt indent để Prettier toàn quyền → hết lỗi Insert ··
      'vue/script-indent': 'off',
      'vue/html-indent': 'off',

      // Cho phép nhiều attr trên 1 dòng (rất quan trọng cho form)
      'vue/max-attributes-per-line': [
        'error',
        {
          singleline: 6, // :name :label :placeholder :rules :model-value class → thoải mái
          multiline: 1,
        },
      ],

      // Tự đóng thẻ (Vue 3 khuyến khích)
      'vue/html-self-closing': [
        'error',
        {
          html: { void: 'always', normal: 'always', component: 'always' },
          svg: 'always',
          math: 'always',
        },
      ],

      // Một số rule mình thích tắt để code nhanh hơn
      'vue/require-default-prop': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/no-v-html': 'off',

      // Prettier vẫn là boss cuối
      'prettier/prettier': 'error',
    },
  },
];
