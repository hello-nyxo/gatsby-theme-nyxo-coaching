import readingTime from "reading-time"
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer"
import { GatsbyNode } from "gatsby"

export const onCreateNode: GatsbyNode["onCreateNode"] = async ({
  node,
  actions,
}) => {
  const { internal } = node
  const { owner, type } = internal
  if (owner !== "gatsby-source-contentful") {
    return
  }

  try {
    let text = ""

    if (type === "ContentfulLesson") {
      const { lessonContent } = node as any

      if (typeof lessonContent !== "undefined") {
        text = documentToPlainTextString(JSON.parse(lessonContent.raw))
      }

      // if (typeof additionalInformation !== "undefined") {
      //   text += documentToPlainTextString(JSON.parse(additionalInformation.raw))
      // }
    } else if (type === "ContentfulWeek") {
      const { weekDescription } = node as any

      if (typeof weekDescription !== "undefined") {
        text = documentToPlainTextString(JSON.parse(weekDescription.raw))
      }
    } else if (type === "ContentfulHabit") {
      const { description } = node as any
      if (typeof description !== "undefined") {
        text = documentToPlainTextString(JSON.parse(description.raw))
      }
    }

    const { minutes } = readingTime(text)
    const value = Math.ceil(minutes) + 1 // Round up

    actions.createNodeField({
      node,
      name: "excerpt",
      value: text.slice(0, 140),
    })
    actions.createNodeField({
      node,
      name: "readingTime",
      value: value,
    })
  } catch (error) {
    console.warn(error)
  }
}
