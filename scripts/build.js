const fs = require('fs')
const path = require('path')
const execa = require('execa')

const allTargets = fs
  .readdirSync(path.resolve(__dirname, '../packages'))
  .filter(pkg =>
    fs.statSync(path.resolve(__dirname, '../packages', pkg)).isDirectory()
  )

run()

async function run() {
  await buildAll(allTargets)
}

async function buildAll(targets) {
  for (const target of targets) {
    await build(target)
  }
}

async function build(target) {
  await execa('rollup', ['-c', '--environment', [`TARGET:${target}`]], {
    stdio: 'inherit'
  })
}
