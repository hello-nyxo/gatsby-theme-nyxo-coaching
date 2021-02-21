import type { GatsbyNode } from "gatsby"
import { kebabCase } from "lodash"
import path from "path"
import { contentfulData } from "../contentful/queries"
import { getLocalizedPath } from "../helpers/i18n"
// import { BlogPostNode } from "../typings/blog-types"

type ContentfulTag = {
  fieldValue: string
}

const templatesDirectory = path.resolve(__dirname, `../templates`)

const tagTemplate = path.resolve(templatesDirectory, `tag.tsx`)
const lessonTemplate = path.resolve(templatesDirectory, `lesson.tsx`)
const weekTemplate = path.resolve(templatesDirectory, `week.tsx`)
const habitTemplate = path.resolve(templatesDirectory, `habit.tsx`)
const questionnaireTemplate = path.resolve(
  templatesDirectory,
  `questionnaire.tsx`
)
const authorTemplate = path.resolve(templatesDirectory, `author.tsx`)

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
}): Promise<null> => {
  const { createPage } = actions

  const {
    data: {
      allContentfulWeek: { nodes: weeks },
      allContentfulLesson: { nodes: lessons },
      allContentfulHabit: { nodes: habits },
      allContentfulAuthor: { nodes: authors },
      allContentfulQuestionnaire: { nodes: questionnaires },
      contentfulTagsQuery: { group: contentfulTags },
    },
  } = (await graphql(contentfulData)) as any

  const allTags = [
    ...new Set([...contentfulTags.map((tag: ContentfulTag) => tag.fieldValue)]),
  ]

  allTags.forEach((tag: string) => {
    if (typeof tag !== undefined) {
      createPage({
        path: `/tags/${kebabCase(tag)}/`,
        component: tagTemplate,
        context: {
          locale: "en-US",
          tag: tag,
        },
      })
    }
  })

  weeks.forEach((week: any, index: number) => {
    const previousWeek =
      index === weeks.length - 1 ? null : weeks[index + 1].slug
    const nextWeek = index === 0 ? null : weeks[index - 1].slug

    createPage({
      path: getLocalizedPath(`/week/${week.slug}`, week.node_locale),
      component: weekTemplate,
      context: {
        slug: week.slug,
        locale: week.node_locale,
        next: nextWeek,
        previous: previousWeek,
      },
    })
  })

  lessons.forEach((lesson: any, index: number) => {
    const previousLesson =
      index === lessons.length - 1 ? null : lessons[index + 1].slug
    const nextLesson = index === 0 ? null : lessons[index - 1].slug

    createPage({
      path: getLocalizedPath(`/lesson/${lesson.slug}`, lesson.node_locale),
      component: lessonTemplate,
      context: {
        pathRegex: `/.*${lesson.slug}.*/`,
        slug: lesson.slug,
        locale: lesson.node_locale,
        previous: previousLesson,
        next: nextLesson,
      },
    })
  })

  habits.forEach((habit: any, index: number) => {
    const previousHabit =
      index === habits.length - 1 ? null : habits[index + 1].slug
    const nextHabit = index === 0 ? null : habits[index - 1].slug

    createPage({
      path: getLocalizedPath(`/habit/${habit.slug}`, habit.node_locale),
      component: habitTemplate,
      context: {
        locale: habit.node_locale,
        slug: habit.slug,
        next: nextHabit,
        previous: previousHabit,
      },
    })
  })

  questionnaires.forEach((questionnaire: any, index: number) => {
    const previousQuestionnaire =
      index === lessons.length - 1 ? null : lessons[index + 1].slug
    const nextQuestionnaire = index === 0 ? null : lessons[index - 1].slug

    createPage({
      path: getLocalizedPath(
        `/questionnaire/${questionnaire.slug}`,
        questionnaire.node_locale
      ),
      component: questionnaireTemplate,
      context: {
        locale: questionnaire.node_locale,
        slug: questionnaire.slug,
        next: nextQuestionnaire,
        previous: previousQuestionnaire,
      },
    })
  })

  authors.forEach((author: any) => {
    const scholar = author.slug ? author.slug.replace(/-/g, " ") : "no"

    createPage({
      path: getLocalizedPath(`/author/${author.slug}`, author.node_locale),
      component: authorTemplate,
      context: {
        slug: author.slug,
        locale: author.node_locale,
        scholar: scholar,
      },
    })
  })

  return null
}
