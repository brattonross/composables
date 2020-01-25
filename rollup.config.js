import path from 'path'
import ts from 'rollup-plugin-typescript2'

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/composables.esm.js',
    format: 'es'
  },
  plugins: [
    ts({
      check: true,
      tsconfig: path.resolve(__dirname, 'tsconfig.json'),
      tsconfigOverride: {
        exclude: ['**/__tests__']
      }
    })
  ],
  external: ['vue']
}
