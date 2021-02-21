import { API, graphqlOperation } from "aws-amplify"
import { navigate } from "gatsby"
import {
  QueryFunctionContext,
  useMutation,
  useQuery,
  QueryFunction,
} from "react-query"
import {
  ContentfulHabit,
  ContentfulLesson,
  ContentfulWeek,
} from "@typings/gatsby-graphql"
import {
  CreateLikedContentInput,
  CreateLikedContentMutation,
  DeleteLikedContentMutation,
  LikedContentBySlugQuery,
  LikedContentBySlugQueryVariables,
  ListLikedContentsQuery,
} from "../API"
import { isLoggedIn } from "../auth/auth"
import { createLikedContent, deleteLikedContent } from "../graphql/mutations"
import { likedContentBySlug, listLikedContents } from "../graphql/queries"

export const fetchAllBookmarks = async () => {
  try {
    const {
      data: { listLikedContents: result = { items: [] } },
    } = (await API.graphql(graphqlOperation(listLikedContents))) as {
      data: ListLikedContentsQuery
    }

    if (!result || !result.items) return []

    return result.items
  } catch (error) {
    return error
  }
}

export const fetchUserBookmarks: QueryFunction<{
  weeks: ContentfulWeek
  lessons: ContentfulLesson
  habits: ContentfulHabit
}> = async ({ queryKey }: QueryFunctionContext<["_key", { content: any }]>) => {
  const [_key, { content }] = queryKey

  try {
    const {
      data: { listLikedContents: result },
    } = (await API.graphql(graphqlOperation(listLikedContents))) as {
      data: ListLikedContentsQuery
    }

    if (!result || !result?.items) return null
    const { items: bookmarks } = result

    // Use forEach instead of map to handle cases where static data does not mach user data (e.g. user has liked new content which does not exist on site yet)
    const weeks: ContentfulWeek[] = []
    const lessons: ContentfulLesson[] = []
    const habits: ContentfulHabit[] = []

    bookmarks.forEach((bookmark) => {
      const extraData = content.find((item) => item.slug === bookmark?.slug)
      if (extraData) {
        switch (bookmark?.type) {
          case "habit":
            habits.push({ ...bookmark, ...extraData })
            break
          case "lesson":
            lessons.push({ ...bookmark, ...extraData })
            break
          case "week":
            weeks.push({ ...bookmark, ...extraData })
            break
          default:
            break
        }
      }
    })

    return {
      weeks,
      lessons,
      habits,
    }
  } catch (error) {
    return error
  }
}

export const fetchWeekBookmarks = async () => {
  const { data } = (await API.graphql(graphqlOperation(listLikedContents))) as {
    data: ListLikedContentsQuery
  }

  return data
}

export const fetchLessonBookmarks: QueryFunction<LikedContentBySlugQuery> = async ({
  queryKey,
}) => {
  const [_key, { type, slug }] = queryKey
  try {
    const query: LikedContentBySlugQueryVariables = {
      slug: slug,
    }

    const {
      data: { likedContentBySlug: result },
    } = (await API.graphql(graphqlOperation(likedContentBySlug, query))) as {
      data: LikedContentBySlugQuery
    }

    if (!result || !result.items) return { bookmarked: false, id: "" }

    const { items } = result

    if (items?.length > 0) {
      return {
        bookmarked: true,
        id: items[0].id,
      }
    } else {
      return {
        bookmarked: false,
        id: "",
      }
    }
  } catch (error) {
    return error
  }
}

export const fetchWeekNLessonBookmarks = async (
  key: string,
  { initialLessons }: { initialLessons: ContentfulLesson[] }
) => {
  try {
    const {
      data: { listLikedContents: res },
    } = (await API.graphql(graphqlOperation(listLikedContents))) as {
      data: ListLikedContentsQuery
    }

    return initialLessons.map((lesson) => {
      if (res?.items?.some((item) => item?.slug === lesson.slug)) {
        return { ...lesson, bookmarked: true }
      } else {
        return lesson
      }
    })
  } catch (error) {
    console.log(error)
    return error
  }
}

const removeBookmark = async ({
  id,
  slug,
  type,
}: {
  id: string
  type: string
  slug: string
}) => {
  if (isLoggedIn()) {
    try {
      const {
        data: { deleteLikedContent: response },
      } = (await API.graphql(
        graphqlOperation(deleteLikedContent, { input: { id: id } })
      )) as { data: DeleteLikedContentMutation }
      console.log(response)
      return { slug }
    } catch (error) {
      return error
    }
  } else {
    navigate("/me/login")
  }
}

const addBookmark = async ({ name, slug, type }: CreateLikedContentInput) => {
  if (isLoggedIn()) {
    try {
      const {
        data: { createLikedContent: response },
      } = (await API.graphql(
        graphqlOperation(createLikedContent, { input: { name, slug, type } })
      )) as { data: CreateLikedContentMutation }
      return { ...response, slug }
    } catch (error) {
      return error
    }
  } else {
    navigate("/me/login")
  }
}

export const useDeleteBookmark = () => {
  return useMutation(removeBookmark, {
    // onMutate: async (newBookmark) => {
    //   await queryClient.cancelQueries(["bookmarks", newBookmark.slug])
    //   const previousBookmark = queryClient.getQueryData([
    //     "todos",
    //     newBookmark.id,
    //   ])
    //   queryClient.setQueryData(["bookmarks", newBookmark.id], newBookmark)
    //   // Return a context with the previous and new todo
    //   return { previousBookmark, newBookmark }
    // },
    // onError: (err, bookmark, context) => {
    //   queryClient.setQueryData(
    //     ["bookmarks", context.bookmark.id],
    //     context.previousBookmark
    //   )
    // },
    // onSettled: (bookmark) => {
    //   queryClient.invalidateQueries(["bookmarks", bookmark.id])
    // },
  })
}

export const useAddBookmark = () => {
  return useMutation(addBookmark, {
    // onSuccess: (data) =>
    //   queryClient.setQueryData(["bookmarks", { id: data.slug }], data),
    // onMutate: async (newBookmark) => {
    //   await queryClient.cancelQueries("bookmarks")
    //   const previousBookmarks = queryClient.getQueryData("bookmarks")
    //   queryClient.setQueryData("bookmarks", (old) => [...old, newBookmark])
    //   return { previousBookmarks }
    // },
    // onError: (err, newBookmark, context) => {
    //   queryClient.setQueryData("bookmarks", context.previousBookmarks)
    // },
    // onSettled: () => {
    //   queryClient.invalidateQueries("bookmarks")
    // },
  })
}

export const useGetBookmark = (slug: string, type: string) => {
  if (isLoggedIn()) {
    return useQuery(
      ["bookmark", { type, slug: slug as string }],
      fetchLessonBookmarks,
      {
        initialData: () => ({
          bookmarked: false,
          id: "",
        }),
      }
    )
  } else {
    return {
      isLoading: false,
      data: {
        bookmarked: false,
        id: "",
      },
    }
  }
}

type InitialData = ContentfulLesson[] | ContentfulHabit[] | ContentfulWeek[]

export const useGetAllBookmarks = (initialData: InitialData) => {
  if (isLoggedIn()) {
    return useQuery("bookmark", fetchAllBookmarks)
  } else {
    return initialData
  }
}

export type ContentData = Array<
  ContentfulWeek | ContentfulLesson | ContentfulHabit
>

export const useGetUserBookmarks = (content: ContentData) => {
  return useQuery(["userBookmarks", { content: content }], fetchUserBookmarks, {
    initialData: () => ({
      lessons: [],
      weeks: [],
      habits: [],
    }),
  })
}

export const useGetLessons = (initialLessons: ContentfulLesson[]) => {
  if (isLoggedIn()) {
    return useQuery(
      ["allLessonBookmarks", { initialLessons }],
      fetchWeekNLessonBookmarks,
      {
        initialData: initialLessons,
        initialStale: true,
      }
    )
  } else {
    return {
      isLoading: false,
      data: initialLessons,
    }
  }
}
