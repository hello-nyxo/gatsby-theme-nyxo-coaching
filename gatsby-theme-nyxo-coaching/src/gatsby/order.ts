import { GatsbyNode } from "gatsby"

export const onCreateNode: GatsbyNode["onCreateNode"] = async ({
  node,
  actions: { createNodeField },
}) => {
  const { internal } = node
  const { owner } = internal
  if (owner !== "gatsby-source-contentful") {
    return
  }

  createNodeField({
    node,
    name: "order",
    value: Math.floor(Math.random() * 100 + 1),
  })
}
