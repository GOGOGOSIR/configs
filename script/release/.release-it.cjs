const fs = require('fs-extra')
const path = require('path')
const minimist = require('minimist')

const commitTemplate = fs
  .readFileSync(path.resolve(__dirname, 'commit.hbs'))
  .toString()

function createReleasePlugins() {
  const argv = minimist(process.argv.slice(2))
  const tagMsg = argv.tagMsg
  const plugins = {
    '@release-it/conventional-changelog': {
      preset: 'angular',
      infile: 'CHANGELOG.md',
      header: '# 日志',
      ignoreRecommendedBump: true,
    },
  }

  if (tagMsg) {
    const tagMsgList = tagMsg.split('\n').filter((s) => s)
    plugins['@release-it/conventional-changelog'].context = {
      tagMsgList: tagMsgList,
    }

    plugins['@release-it/conventional-changelog'].writerOpts = {
      mainTemplate: commitTemplate,
    }
  }

  return plugins
}

module.exports = {
  git: {
    requireBranch: 'master',
    commitMessage: 'chore: release v${version}',
    requireCommits: true,
    tagName: 'v${version}',
    tagAnnotation: `release date: ${new Date().toLocaleString()}`,
  },
  github: {
    release: true,
  },
  npm: {
    publish: false,
  },
  plugins: createReleasePlugins(),
}
