import { useMutation, useQuery } from "react-query"
import { Auth, API, graphqlOperation } from "aws-amplify"
import { listNights } from "../graphql/queries"
import { createNight } from "../graphql/mutations"
import { toast } from "react-hot-toast"

import {
  ListNightsQuery,
  CreateNightMutation,
  CreateNightInput,
  ListNightsQueryVariables,
} from "../API"

const listSleep = async (): Promise<ListNightsQuery["listNights"]> => {
  try {
    const { username } = await Auth.currentUserInfo()
    const variables: ListNightsQueryVariables = {
      filter: { userId: { eq: username } },
    }
    const {
      data: { listNights: data },
    } = (await API.graphql(graphqlOperation(listNights, variables))) as {
      data: ListNightsQuery
    }

    console.log(data)
    return data
  } catch (error) {
    console.log(error)
    return error
  }
}

const createNewNight = async (night: CreateNightInput) => {
  console.log(night)
  try {
    const {
      data: { createNight: response },
    } = (await API.graphql(
      graphqlOperation(createNight, { input: night })
    )) as {
      data: CreateNightMutation
    }
  } catch (error) {
    console.log(error)
    toast.error("Night could not be saved")
    return error
  }
}

export const useGetSleep = () => {
  return useQuery("sleep", listSleep)
}

export const useCreateNight = () => {
  return useMutation(createNewNight)
}
