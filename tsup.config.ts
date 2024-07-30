import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['./index.ts'],
  splitting: false,
  clean: true,
  format: 'esm',
  dts: true,
  outDir: '.'
})
