const path = require("path")

exports.onCreateNode = async (options) => {
  return Promise.all([
    require("./src/gatsby/reading-time").onCreateNode(options),
    require("./src/gatsby/excerpt").onCreateNode(options),
  ])
}

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  if (page.path.match(/^\/me/)) {
    page.matchPath = `/me/*`
    createPage(page)
  }
}

exports.createPages = require("./src/gatsby/createPages").createPages

const ChildProcess = require("child_process")

exports.onPostBuild = () => {
  ChildProcess.execSync(
    "ps aux | grep jest | grep -v grep | awk '{print $2}' | xargs kill"
  )
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@auth": path.resolve(__dirname, "src/auth/"),
        "@components": path.resolve(__dirname, "src/components/"),
        "@hooks": path.resolve(__dirname, "src/hooks/"),
        "@styles": path.resolve(__dirname, "src/styles/"),
        "@graphql": path.resolve(__dirname, "src/graphql/"),
        "@helpers": path.resolve(__dirname, "src/helpers/"),
      },
    },
  })
}
