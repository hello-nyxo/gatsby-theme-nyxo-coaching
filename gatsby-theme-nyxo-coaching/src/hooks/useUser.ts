import { useQuery, QueryResult, useMutation } from "react-query"
import { Auth, API, graphqlOperation } from "aws-amplify"
import {
  GetUserQuery,
  UpdateUserMutation,
  UpdateUserInput,
  GetActiveCoachingQuery,
} from "../API"
import { updateUser } from "../graphql/mutations"
import { getUser } from "../graphql/queries"
import { getActiveCoaching } from "@graphql/custom/queries"

export const updateUserData = async ({
  user,
}: {
  user: UpdateUserInput
}): Promise<UpdateUserMutation["updateUser"]> => {
  const { username } = await Auth.currentAuthenticatedUser()
  const input = {
    ...user,
    id: username,
  }

  try {
    const {
      data: { updateUser: data },
    } = (await API.graphql(graphqlOperation(updateUser, { input: input }))) as {
      data: UpdateUserMutation
    }
    return data
  } catch (error) {
    console.log("UpdateUserMutation", error)
    return error
  }
}

export const getUserData = async (): Promise<GetUserQuery["getUser"]> => {
  try {
    const { username } = await Auth.currentUserInfo()
    const {
      data: { getUser: data },
    } = (await API.graphql(graphqlOperation(getUser, { id: username }))) as {
      data: GetUserQuery
    }
    return data
  } catch (error) {
    return error
  }
}

export const getUserActiveCoaching = async (): Promise<Exclude<
  Exclude<GetActiveCoachingQuery["getUser"], null>["activeCoaching"],
  null
> | null> => {
  try {
    const { username } = await Auth.currentUserInfo()
    const {
      data: { getUser: data },
    } = (await API.graphql(
      graphqlOperation(getActiveCoaching, { id: username })
    )) as {
      data: GetActiveCoachingQuery
    }

    if (data?.activeCoaching) {
      return data?.activeCoaching
    }

    return null
  } catch (error) {
    return error
  }
}

// HOOKS

export const useGetUser = (): QueryResult<GetUserQuery["getUser"]> => {
  return useQuery(["user"], getUserData)
}

export const useUpdateUser = () => {
  return useMutation(updateUserData)
}

export const useGetActiveCoaching = (): QueryResult<Exclude<
  Exclude<GetActiveCoachingQuery["getUser"], null>["activeCoaching"],
  null
> | null> => {
  return useQuery("userActiveCoaching", getUserActiveCoaching)
}
