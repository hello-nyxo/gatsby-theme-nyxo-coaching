import { GatsbyNode } from "gatsby"

export const onCreateNode: GatsbyNode["onCreateNode"] = async ({
  node,
  loadNodeContent,
  actions: { createNodeField },
}) => {
  const { internal } = node
  const { type, owner } = internal
  if (owner !== "gatsby-source-contentful") {
    return
  }

  createNodeField({
    node,
    name: "language",
    value: node.node_locale === "en-US" ? "en" : "fi",
  })
}
