exports.onCreateNode = async (options) => {
  return Promise.all([
    require("./.gatsby/src/gatsby/reading-time").onCreateNode(options),
    require("./.gatsby/src/gatsby/excerpt").onCreateNode(options),
  ])
}

exports.createPages = require("./.gatsby/src/gatsby/createPages").createPages

const ChildProcess = require("child_process")

exports.onPostBuild = () => {
  ChildProcess.execSync(
    "ps aux | grep jest | grep -v grep | awk '{print $2}' | xargs kill"
  )
}
