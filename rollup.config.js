import path from 'path'
import ts from 'rollup-plugin-typescript2'

if (!process.env.TARGET) {
  throw new Error('TARGET package must be specified via --environment flag.')
}

const packagesDir = path.resolve(__dirname, 'packages')
const packageDir = path.resolve(packagesDir, process.env.TARGET)
const name = path.basename(packageDir)
const resolve = p => path.resolve(packageDir, p)

export default {
  input: resolve('lib/index.ts'),
  output: {
    file: resolve(`dist/${name}.esm.js`),
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
  ]
}
