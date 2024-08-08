import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['./index.ts'],
  splitting: false,
  format: 'esm',
  dts: true,
  outDir: './',
  target: 'es2018'
})
