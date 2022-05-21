const inquirer = require('inquirer')
const spawn = require('cross-spawn')

async function main() {
  const { autocompletion, message } = await inquirer.prompt([
    {
      message: '是否自定义tag描述信息',
      name: 'autocompletion',
      type: 'confirm',
      default: false
    },
    {
      message: '请填写描述信息',
      name: 'message',
      type: 'editor',
      default: '',
      when: ({ autocompletion }) => {
        return autocompletion
      }
    }
  ])

  if (autocompletion) {
    spawn.sync('yarn', ['release-start', `--tagMsg=${message}`], {
      stdio: 'inherit'
    })
  } else {
    spawn.sync('yarn', ['release-start'], { stdio: 'inherit' })
  }
}

main()
