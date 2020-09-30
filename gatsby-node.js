exports.onCreateNode = async (options) => {
  return Promise.all([
    require("./src/gatsby/reading-time").onCreateNode(options),
    require("./src/gatsby/excerpt").onCreateNode(options),
  ])
}

exports.createPages = require("./src/gatsby/createPages").createPages

const ChildProcess = require("child_process")

exports.onPostBuild = () => {
  ChildProcess.execSync(
    "ps aux | grep jest | grep -v grep | awk '{print $2}' | xargs kill"
  )
}
