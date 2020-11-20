import {
  useQuery,
  QueryResult,
  useMutation,
  MutationResult,
  MutationFunction,
} from "react-query"
import { Auth, API, graphqlOperation } from "aws-amplify"
import {
  GetUserQuery,
  UpdateUserMutation,
  UpdateUserInput,
  GetActiveCoachingQuery,
  ListUsersQuery,
} from "../API"
import { updateUser } from "../graphql/mutations"
import { getUser, listUsers } from "../graphql/queries"
import { getActiveCoaching } from "@graphql/custom/queries"

const listAllUsers = async () => {
  try {
    const { username } = await Auth.currentUserInfo()
    const {
      data: { listUsers: data },
    } = (await API.graphql(graphqlOperation(listUsers, { id: username }))) as {
      data: ListUsersQuery
    }

    return data
  } catch (error) {
    console.log(error)
  }
}

export const useListUsers = () => {
  return useQuery("listUsers", listAllUsers)
}
