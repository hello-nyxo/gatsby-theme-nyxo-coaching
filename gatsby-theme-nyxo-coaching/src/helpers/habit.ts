import { ContentfulHabit, ContentfulLesson } from "@typings/gatsby-graphql"

export const getFirstLesson = (
  habit: ContentfulHabit
): ContentfulLesson | undefined | null => {
  if (habit.lesson && habit.lesson.length > 0) {
    return habit.lesson[0]
  }
  return undefined
}
