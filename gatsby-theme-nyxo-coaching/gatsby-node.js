const path = require("path")

exports.onCreateNode = async (options) => {
  return Promise.all([
    // require("./src/gatsby/reading-time").onCreateNode(options),
    require("./src/gatsby/excerpt").onCreateNode(options),
    require("./src/gatsby/locale").onCreateNode(options),
    require("./src/gatsby/order").onCreateNode(options),
  ])
}

exports.createPages = require("./src/gatsby/createPages").createPages

const ChildProcess = require("child_process")

exports.onPostBuild = () => {
  ChildProcess.execSync(
    "ps aux | grep jest | grep -v grep | awk '{print $2}' | xargs kill"
  )
}

exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
  const config = getConfig()
  const devTools = config.mode === "production" ? { devtool: false } : {}

  actions.setWebpackConfig({
    ...devTools,
    resolve: {
      alias: {
        "@auth": path.resolve(__dirname, "src/auth/"),
        "@components": path.resolve(__dirname, "src/components/"),
        "@hooks": path.resolve(__dirname, "src/hooks/"),
        "@styles": path.resolve(__dirname, "src/styles/"),
        "@graphql": path.resolve(__dirname, "src/graphql/"),
        "@typings": path.resolve(__dirname, "src/typings/"),
        "@helpers": path.resolve(__dirname, "src/helpers/"),
        "@gatsby": path.resolve(__dirname, "src/gatsby/"),
        "@API": path.resolve(__dirname, "src/API"),
        "@context": path.resolve(__dirname, "src/context/"),
      },
    },
  })
}
