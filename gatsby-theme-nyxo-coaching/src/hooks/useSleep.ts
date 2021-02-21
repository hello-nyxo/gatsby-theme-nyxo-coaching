import { useQuery } from "react-query"
import { Auth, API, graphqlOperation } from "aws-amplify"
import { listNights } from "../graphql/queries"
import { ListNightsQuery } from "../API"

const listSleep = async (): Promise<ListNightsQuery["listNights"]> => {
  try {
    const { username } = await Auth.currentUserInfo()
    const {
      data: { listNights: data },
    } = (await API.graphql(graphqlOperation(listNights, { id: username }))) as {
      data: ListNightsQuery
    }

    console.log(data)
    return data
  } catch (error) {
    console.log(error)
    return error
  }
}

export const useGetSleep = () => {
  return useQuery("sleep", listSleep)
}

export const useGetAllSleep = () => {
  return useInfiniteQueryeQuery("sleep", listSleep, {
    getFetchMore: (lastGroup, allGroups) => lastGroup.nextToken,
  })
}
