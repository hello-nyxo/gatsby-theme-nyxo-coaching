import { isLoggedIn } from "@auth/auth"
import { deleteRequest, createCoachingRequest } from "@graphql/mutations"
import { API, Auth, graphqlOperation } from "aws-amplify"
import { useMutation, useQuery } from "react-query"
import {
  CreateCoachingRequestInput,
  CreateCoachingRequestMutation,
  DeleteRequestInput,
  DeleteRequestMutation,
  ListRequestsQuery,
} from "../API"
import { listRequests } from "../graphql/queries"

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

      const input: CreateCoachingRequestInput = {
        requesterId: username,
        requesterName: requesterEmail,
        userId: email,
        accepted: false,
        userName: email,
        owner: username,
        code: "",
      }

      const {
        data: { createCoachingRequest: response },
      } = (await API.graphql(
        graphqlOperation(createCoachingRequest, { input: input })
      )) as { data: CreateCoachingRequestMutation }
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
  return useMutation(acceptRequest)
}

export const useDeleteRequest = () => {
  return useMutation(deleteCoachingRequest)
}
