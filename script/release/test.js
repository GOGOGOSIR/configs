const path = require('path')
const execa = require('execa')

async function main() {
  console.log(process.env.GITHUB_AUTH)
  await execa('node', [path.resolve(__dirname, './gen-changelog.js')], { stdio: 'inherit' })
}

main()
