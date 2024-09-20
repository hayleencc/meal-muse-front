import { defineConfig } from 'vitest/config'

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.ts',
    coverage: {
      provider: 'v8',
      include: ['src/**/*.test.tsx'],
      exclude: ['node_modules/**', 'dist/**', 'coverage/**', 'vite.config.ts', 'build/**'],
      reportsDirectory: './coverage',
      reporter: ['text', 'html', 'json-summary'],
      all: true,
      clean: true,
      thresholds: {
        global: {
          statements: 80,
          branches: 80,
          functions: 80,
          lines: 80
        }
      },
    }
  }
});
