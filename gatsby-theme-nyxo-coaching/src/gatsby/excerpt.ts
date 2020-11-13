import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer"
import { GatsbyNode } from "gatsby"

export const onCreateNode: GatsbyNode["onCreateNode"] = async ({
  node,
  loadNodeContent,
  getNode,
  actions,
}) => {
  const {
    internal: { owner, type },
  } = node
  if (owner !== "gatsby-source-contentful") {
    return
  }

  console.log(node)

  let excerpt = ""

  if (type === "ContentfulLesson") {
    // @ts-ignore
    const text = documentToPlainTextString(node.lessonContent.raw)
    excerpt = text.slice(0, 140)
  }

  actions.createNodeField({ node, name: "excerpt", value: excerpt })
}
