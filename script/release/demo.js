const execa = require('execa')

async function main() {
  const { stdout } = await execa('git', ['branch', '-a'])
  const hasDevBranch = stdout.split('\n').some(b => b.includes('main'))
  console.log(hasDevBranch)
}

main()
