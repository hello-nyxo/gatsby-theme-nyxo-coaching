import { getActiveCoaching } from "@graphql/custom/queries"
import { API, Auth, graphqlOperation } from "aws-amplify"
import { queryCache, QueryResult, useMutation, useQuery } from "react-query"
import {
  CreateCoachingDataInput,
  CreateCoachingDataMutation,
  GetActiveCoachingQuery,
  GetCoachingDataQuery,
  ListCoachingDatasQuery,
  UpdateCoachingDataInput,
  UpdateCoachingDataMutation,
  UpdateUserMutation,
} from "../API"
import {
  createCoachingData,
  updateCoachingData,
  updateUser,
} from "@graphql/mutations"
import { getCoachingData, listCoachingDatas } from "@graphql/queries"
import { isLoggedIn } from "@auth/auth"
import { queryClient } from "@gatsby/wrap-root-element"

export type CoachingData = Omit<
  Exclude<GetCoachingDataQuery["getCoachingData"], null>,
  "__typename" | "user"
> | null

export const listCoaching = async (): Promise<
  Exclude<ListCoachingDatasQuery["listCoachingDatas"], null>["items"]
> => {
  try {
    const {
      data: { listCoachingDatas: data },
    } = (await API.graphql(graphqlOperation(listCoachingDatas))) as {
      data: ListCoachingDatasQuery
    }

    return data
  } catch (error) {
    return error
  }
}

export const getCoaching = async (
  key: string,
  { id }: { id: string }
): Promise<GetCoachingDataQuery["getCoachingData"]> => {
  try {
    const {
      data: { getCoachingData: data },
    } = (await API.graphql(graphqlOperation(getCoachingData, { id }))) as {
      data: GetCoachingDataQuery
    }

    return data
  } catch (error) {
    return error
  }
}

export const createCoaching = async ({
  coaching,
}: {
  coaching: CreateCoachingDataInput
}): Promise<CreateCoachingDataMutation["createCoachingData"]> => {
  try {
    const { username } = await Auth.currentUserInfo()

    const {
      data: { createCoachingData: data },
    } = (await API.graphql(
      graphqlOperation(createCoachingData, { input: coaching })
    )) as {
      data: CreateCoachingDataMutation
    }

    const input: UpdateUserMutation = {
      activeCoaching: data?.id,
      id: username,
    }

    const _ = (await API.graphql(
      graphqlOperation(updateUser, { input: input })
    )) as {
      data: UpdateUserMutation
    }

    return data
  } catch (error) {
    return error
  }
}

export const getLessonCompleted = async ({ queryKey }): Promise<boolean> => {
  const [_key, { slug }] = queryKey

  if (isLoggedIn()) {
    try {
      const { username } = await Auth.currentUserInfo()
      const {
        data: { getUser: data },
      } = (await API.graphql(
        graphqlOperation(getActiveCoaching, { id: username })
      )) as {
        data: GetActiveCoachingQuery
      }

      if (data?.activeCoaching?.lessons?.some((lesson) => lesson === slug)) {
        return true
      }

      return false
    } catch (error) {
      return error
    }
  } else {
    return false
  }
}

export const completeLesson = async ({
  lesson,
  existingLessons,
  id,
}: {
  lesson: string
  existingLessons: string[]
  id: string
}): Promise<string> => {
  const coaching: UpdateCoachingDataInput = {
    id,
    lessons: [...new Set([lesson, ...existingLessons])],
  }

  try {
    const {
      data: { updateCoachingData: data },
    } = (await API.graphql(
      graphqlOperation(updateCoachingData, { input: coaching })
    )) as {
      data: UpdateCoachingDataMutation
    }

    return lesson
  } catch (error) {
    return error
  }
}

export const updateCoaching = async ({
  coaching,
}: {
  coaching: UpdateCoachingDataInput
}): Promise<UpdateCoachingDataMutation["updateCoachingData"]> => {
  try {
    const {
      data: { updateCoachingData: data },
    } = (await API.graphql(
      graphqlOperation(updateCoachingData, { input: coaching })
    )) as {
      data: UpdateCoachingDataMutation
    }
    return data
  } catch (error) {
    console.log(error)
    return error
  }
}

// HOOKS

export const useListCoaching = (): QueryResult<
  Exclude<ListCoachingDatasQuery["listCoachingDatas"], null>["items"]
> => {
  return useQuery("listCoaching", listCoaching)
}

export const useCreateCoaching = () => {
  return useMutation(createCoaching)
}

export const useCompleteLesson = () => {
  return useMutation(completeLesson, {
    onMutate: (data) => {
      const previousLesson = queryClient.getQueryData([
        "lesson",
        { slug: data.lesson },
      ])
      queryClient.setQueryData("lesson", [{ slug: data.lesson }])

      return () => queryCache.setQueryData("lessons", previousLesson)
    },
    onSettled: () => {
      queryClient.invalidateQueries("lesson")
    },
  })
}

export const useUpdateCoaching = () => {
  return useMutation(updateCoaching, {})
}

export const useGetLesson = (slug: string): QueryResult<boolean> => {
  return useQuery(["lesson", { slug: slug as string }], getLessonCompleted)
}
