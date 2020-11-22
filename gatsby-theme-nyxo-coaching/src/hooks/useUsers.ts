import { listCoachees } from "@graphql/custom/queries"
import { API, Auth, graphqlOperation } from "aws-amplify"
import { useQuery } from "react-query"
import { ListUsersQuery } from "../API"

const listAllUsers = async () => {
  try {
    const { username } = await Auth.currentUserInfo()
    const {
      data: { listUsers: data },
    } = (await API.graphql(
      graphqlOperation(listCoachees, { id: username })
    )) as {
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
