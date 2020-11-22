import { useMutation, useQuery } from "react-query"
import { Auth, API, graphqlOperation } from "aws-amplify"
import { listNights, listRequests } from "../graphql/queries"
import {
  CreateRequestInput,
  CreateRequestMutation,
  DeleteRequestInput,
  DeleteRequestMutation,
  ListNightsQuery,
  ListRequestsQuery,
} from "../API"
import { isLoggedIn } from "@auth/auth"
import { createRequest, deleteRequest } from "@graphql/mutations"

const listUsersRequests = async () => {
  try {
    const {
      data: { listRequests: data },
    } = (await API.graphql(graphqlOperation(listRequests))) as {
      data: ListRequestsQuery
    }

    return data
  } catch (error) {
    console.log(error)
  }
}

const deleteCoachingRequest = async ({ id }: { id: string }) => {
  if (isLoggedIn()) {
    try {
      const input: DeleteRequestInput = {
        id: id,
      }

      const {
        data: { deleteRequest: response },
      } = (await API.graphql(
        graphqlOperation(deleteRequest, { input: input })
      )) as { data: DeleteRequestMutation }
      return response
    } catch (error) {
      console.warn(error)
      return error
    }
  }
}

const acceptRequest = async ({ id }: { id: string }) => {
  if (isLoggedIn()) {
    try {
      const input: DeleteRequestInput = {
        id: id,
      }

      const {
        data: { deleteRequest: response },
      } = (await API.graphql(
        graphqlOperation(deleteRequest, { input: input })
      )) as { data: DeleteRequestMutation }
      return response
    } catch (error) {
      console.warn(error)
      return error
    }
  }
}

const createNewRequest = async ({ email }: { email: string }) => {
  if (isLoggedIn()) {
    try {
      const {
        username,
        attributes: { email: requesterEmail },
      } = await Auth.currentUserInfo()

      const input: CreateRequestInput = {
        requesterId: username,
        requesterName: requesterEmail,
        userId: email,
        accepted: false,
        userName: email,
      }

      const {
        data: { createRequest: response },
      } = (await API.graphql(
        graphqlOperation(createRequest, { input: input })
      )) as { data: CreateRequestMutation }
      return response
    } catch (error) {
      console.warn(error)
      return error
    }
  }
}

export const useListRequests = () => {
  return useQuery("requests", listUsersRequests)
}

export const useCreateRequest = () => {
  return useMutation(createNewRequest)
}

export const useAcceptRequest = () => {
  return useMutation(createNewRequest)
}

export const useDeleteRequest = () => {
  return useMutation(deleteCoachingRequest)
}
