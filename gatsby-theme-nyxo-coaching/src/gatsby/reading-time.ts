import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer"
import readingTime from "reading-time"
import { GatsbyNode } from "gatsby"

export const onCreateNode: GatsbyNode["onCreateNode"] = async ({
  node,
  actions: { createNodeField },
}) => {
  const { internal } = node
  const { owner, type } = internal
  if (owner !== "gatsby-source-contentful") {
    return
  }

  let text = ""

  if (type === "ContentfulLesson") {
    // @ts-ignore
    text = documentToPlainTextString(JSON.parse(node.lessonContent.raw as any))
  }

  if (type === "ContentfulWeek") {
    // @ts-ignore
    text = documentToPlainTextString(JSON.parse(node.weekDescription.raw))
  }

  if (type === "ContentfulHabit") {
    // @ts-ignore
    text = documentToPlainTextString(JSON.parse(node.description.raw))
  }

  console.log(text)

  const { minutes } = readingTime(text)
  const value = Math.ceil(minutes) + 1

  createNodeField({
    node,
    name: "readingTime",
    value: value,
  })
}
