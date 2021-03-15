/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCoachingRequest = /* GraphQL */ `
  mutation CreateCoachingRequest($input: CreateCoachingRequestInput!) {
    createCoachingRequest(input: $input) {
      id
      requesterName
      requesterId
      userName
      code
      userId
      accepted
      createdAt
      updatedAt
    }
  }
`;
export const createSleepData = /* GraphQL */ `
  mutation CreateSleepData($input: CreateSleepDataInput!) {
    createSleepData(input: $input) {
      id
      userId
      user {
        connectionId
        id
        email
        nickname
        darkMode
        intercomId
        viewers
        activeCoaching {
          id
          userId
          user {
            connectionId
            id
            email
            nickname
            darkMode
            intercomId
            viewers
            primaryDeviceID
            createdAt
            updatedAt
          }
          stage
          active {
            connectionId
            id
            email
            nickname
            darkMode
            intercomId
            viewers
            primaryDeviceID
            createdAt
            updatedAt
          }
          activeWeek
          started
          ended
          weeks {
            started
            ended
            locked
            slug
          }
          lessons
          createdAt
          updatedAt
          owner
        }
        primaryDeviceID
        sleepPoints {
          efficiency
          duration
          socialJetLag
          timing
        }
        createdAt
        updatedAt
      }
      date
      rating
      night {
        value
        sourceName
        sourceId
        startDate
        endDate
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateSleepData = /* GraphQL */ `
  mutation UpdateSleepData($input: UpdateSleepDataInput!) {
    updateSleepData(input: $input) {
      id
      userId
      user {
        connectionId
        id
        email
        nickname
        darkMode
        intercomId
        viewers
        activeCoaching {
          id
          userId
          user {
            connectionId
            id
            email
            nickname
            darkMode
            intercomId
            viewers
            primaryDeviceID
            createdAt
            updatedAt
          }
          stage
          active {
            connectionId
            id
            email
            nickname
            darkMode
            intercomId
            viewers
            primaryDeviceID
            createdAt
            updatedAt
          }
          activeWeek
          started
          ended
          weeks {
            started
            ended
            locked
            slug
          }
          lessons
          createdAt
          updatedAt
          owner
        }
        primaryDeviceID
        sleepPoints {
          efficiency
          duration
          socialJetLag
          timing
        }
        createdAt
        updatedAt
      }
      date
      rating
      night {
        value
        sourceName
        sourceId
        startDate
        endDate
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteSleepData = /* GraphQL */ `
  mutation DeleteSleepData($input: DeleteSleepDataInput!) {
    deleteSleepData(input: $input) {
      id
      userId
      user {
        connectionId
        id
        email
        nickname
        darkMode
        intercomId
        viewers
        activeCoaching {
          id
          userId
          user {
            connectionId
            id
            email
            nickname
            darkMode
            intercomId
            viewers
            primaryDeviceID
            createdAt
            updatedAt
          }
          stage
          active {
            connectionId
            id
            email
            nickname
            darkMode
            intercomId
            viewers
            primaryDeviceID
            createdAt
            updatedAt
          }
          activeWeek
          started
          ended
          weeks {
            started
            ended
            locked
            slug
          }
          lessons
          createdAt
          updatedAt
          owner
        }
        primaryDeviceID
        sleepPoints {
          efficiency
          duration
          socialJetLag
          timing
        }
        createdAt
        updatedAt
      }
      date
      rating
      night {
        value
        sourceName
        sourceId
        startDate
        endDate
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createRequest = /* GraphQL */ `
  mutation CreateRequest($input: CreateRequestInput!) {
    createRequest(input: $input) {
      id
      requesterName
      requesterId
      userName
      code
      userId
      accepted
      createdAt
      updatedAt
    }
  }
`;
export const updateRequest = /* GraphQL */ `
  mutation UpdateRequest($input: UpdateRequestInput!) {
    updateRequest(input: $input) {
      id
      requesterName
      requesterId
      userName
      code
      userId
      accepted
      createdAt
      updatedAt
    }
  }
`;
export const deleteRequest = /* GraphQL */ `
  mutation DeleteRequest($input: DeleteRequestInput!) {
    deleteRequest(input: $input) {
      id
      requesterName
      requesterId
      userName
      code
      userId
      accepted
      createdAt
      updatedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      connectionId
      id
      email
      nickname
      darkMode
      intercomId
      viewers
      activeCoaching {
        id
        userId
        user {
          connectionId
          id
          email
          nickname
          darkMode
          intercomId
          viewers
          activeCoaching {
            id
            userId
            stage
            activeWeek
            started
            ended
            lessons
            createdAt
            updatedAt
            owner
          }
          primaryDeviceID
          sleepPoints {
            efficiency
            duration
            socialJetLag
            timing
          }
          createdAt
          updatedAt
        }
        stage
        active {
          connectionId
          id
          email
          nickname
          darkMode
          intercomId
          viewers
          activeCoaching {
            id
            userId
            stage
            activeWeek
            started
            ended
            lessons
            createdAt
            updatedAt
            owner
          }
          primaryDeviceID
          sleepPoints {
            efficiency
            duration
            socialJetLag
            timing
          }
          createdAt
          updatedAt
        }
        activeWeek
        started
        ended
        weeks {
          started
          ended
          locked
          slug
        }
        lessons
        createdAt
        updatedAt
        owner
      }
      primaryDeviceID
      sleepPoints {
        efficiency
        duration
        socialJetLag
        timing
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser($input: UpdateUserInput!) {
    updateUser(input: $input) {
      connectionId
      id
      email
      nickname
      darkMode
      intercomId
      viewers
      activeCoaching {
        id
        userId
        user {
          connectionId
          id
          email
          nickname
          darkMode
          intercomId
          viewers
          activeCoaching {
            id
            userId
            stage
            activeWeek
            started
            ended
            lessons
            createdAt
            updatedAt
            owner
          }
          primaryDeviceID
          sleepPoints {
            efficiency
            duration
            socialJetLag
            timing
          }
          createdAt
          updatedAt
        }
        stage
        active {
          connectionId
          id
          email
          nickname
          darkMode
          intercomId
          viewers
          activeCoaching {
            id
            userId
            stage
            activeWeek
            started
            ended
            lessons
            createdAt
            updatedAt
            owner
          }
          primaryDeviceID
          sleepPoints {
            efficiency
            duration
            socialJetLag
            timing
          }
          createdAt
          updatedAt
        }
        activeWeek
        started
        ended
        weeks {
          started
          ended
          locked
          slug
        }
        lessons
        createdAt
        updatedAt
        owner
      }
      primaryDeviceID
      sleepPoints {
        efficiency
        duration
        socialJetLag
        timing
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser($input: DeleteUserInput!) {
    deleteUser(input: $input) {
      connectionId
      id
      email
      nickname
      darkMode
      intercomId
      viewers
      activeCoaching {
        id
        userId
        user {
          connectionId
          id
          email
          nickname
          darkMode
          intercomId
          viewers
          activeCoaching {
            id
            userId
            stage
            activeWeek
            started
            ended
            lessons
            createdAt
            updatedAt
            owner
          }
          primaryDeviceID
          sleepPoints {
            efficiency
            duration
            socialJetLag
            timing
          }
          createdAt
          updatedAt
        }
        stage
        active {
          connectionId
          id
          email
          nickname
          darkMode
          intercomId
          viewers
          activeCoaching {
            id
            userId
            stage
            activeWeek
            started
            ended
            lessons
            createdAt
            updatedAt
            owner
          }
          primaryDeviceID
          sleepPoints {
            efficiency
            duration
            socialJetLag
            timing
          }
          createdAt
          updatedAt
        }
        activeWeek
        started
        ended
        weeks {
          started
          ended
          locked
          slug
        }
        lessons
        createdAt
        updatedAt
        owner
      }
      primaryDeviceID
      sleepPoints {
        efficiency
        duration
        socialJetLag
        timing
      }
      createdAt
      updatedAt
    }
  }
`;
export const createCoachingData = /* GraphQL */ `
  mutation CreateCoachingData($input: CreateCoachingDataInput!) {
    createCoachingData(input: $input) {
      id
      userId
      user {
        connectionId
        id
        email
        nickname
        darkMode
        intercomId
        viewers
        activeCoaching {
          id
          userId
          user {
            connectionId
            id
            email
            nickname
            darkMode
            intercomId
            viewers
            primaryDeviceID
            createdAt
            updatedAt
          }
          stage
          active {
            connectionId
            id
            email
            nickname
            darkMode
            intercomId
            viewers
            primaryDeviceID
            createdAt
            updatedAt
          }
          activeWeek
          started
          ended
          weeks {
            started
            ended
            locked
            slug
          }
          lessons
          createdAt
          updatedAt
          owner
        }
        primaryDeviceID
        sleepPoints {
          efficiency
          duration
          socialJetLag
          timing
        }
        createdAt
        updatedAt
      }
      stage
      active {
        connectionId
        id
        email
        nickname
        darkMode
        intercomId
        viewers
        activeCoaching {
          id
          userId
          user {
            connectionId
            id
            email
            nickname
            darkMode
            intercomId
            viewers
            primaryDeviceID
            createdAt
            updatedAt
          }
          stage
          active {
            connectionId
            id
            email
            nickname
            darkMode
            intercomId
            viewers
            primaryDeviceID
            createdAt
            updatedAt
          }
          activeWeek
          started
          ended
          weeks {
            started
            ended
            locked
            slug
          }
          lessons
          createdAt
          updatedAt
          owner
        }
        primaryDeviceID
        sleepPoints {
          efficiency
          duration
          socialJetLag
          timing
        }
        createdAt
        updatedAt
      }
      activeWeek
      started
      ended
      weeks {
        started
        ended
        locked
        slug
      }
      lessons
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateCoachingData = /* GraphQL */ `
  mutation UpdateCoachingData($input: UpdateCoachingDataInput!) {
    updateCoachingData(input: $input) {
      id
      userId
      user {
        connectionId
        id
        email
        nickname
        darkMode
        intercomId
        viewers
        activeCoaching {
          id
          userId
          user {
            connectionId
            id
            email
            nickname
            darkMode
            intercomId
            viewers
            primaryDeviceID
            createdAt
            updatedAt
          }
          stage
          active {
            connectionId
            id
            email
            nickname
            darkMode
            intercomId
            viewers
            primaryDeviceID
            createdAt
            updatedAt
          }
          activeWeek
          started
          ended
          weeks {
            started
            ended
            locked
            slug
          }
          lessons
          createdAt
          updatedAt
          owner
        }
        primaryDeviceID
        sleepPoints {
          efficiency
          duration
          socialJetLag
          timing
        }
        createdAt
        updatedAt
      }
      stage
      active {
        connectionId
        id
        email
        nickname
        darkMode
        intercomId
        viewers
        activeCoaching {
          id
          userId
          user {
            connectionId
            id
            email
            nickname
            darkMode
            intercomId
            viewers
            primaryDeviceID
            createdAt
            updatedAt
          }
          stage
          active {
            connectionId
            id
            email
            nickname
            darkMode
            intercomId
            viewers
            primaryDeviceID
            createdAt
            updatedAt
          }
          activeWeek
          started
          ended
          weeks {
            started
            ended
            locked
            slug
          }
          lessons
          createdAt
          updatedAt
          owner
        }
        primaryDeviceID
        sleepPoints {
          efficiency
          duration
          socialJetLag
          timing
        }
        createdAt
        updatedAt
      }
      activeWeek
      started
      ended
      weeks {
        started
        ended
        locked
        slug
      }
      lessons
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteCoachingData = /* GraphQL */ `
  mutation DeleteCoachingData($input: DeleteCoachingDataInput!) {
    deleteCoachingData(input: $input) {
      id
      userId
      user {
        connectionId
        id
        email
        nickname
        darkMode
        intercomId
        viewers
        activeCoaching {
          id
          userId
          user {
            connectionId
            id
            email
            nickname
            darkMode
            intercomId
            viewers
            primaryDeviceID
            createdAt
            updatedAt
          }
          stage
          active {
            connectionId
            id
            email
            nickname
            darkMode
            intercomId
            viewers
            primaryDeviceID
            createdAt
            updatedAt
          }
          activeWeek
          started
          ended
          weeks {
            started
            ended
            locked
            slug
          }
          lessons
          createdAt
          updatedAt
          owner
        }
        primaryDeviceID
        sleepPoints {
          efficiency
          duration
          socialJetLag
          timing
        }
        createdAt
        updatedAt
      }
      stage
      active {
        connectionId
        id
        email
        nickname
        darkMode
        intercomId
        viewers
        activeCoaching {
          id
          userId
          user {
            connectionId
            id
            email
            nickname
            darkMode
            intercomId
            viewers
            primaryDeviceID
            createdAt
            updatedAt
          }
          stage
          active {
            connectionId
            id
            email
            nickname
            darkMode
            intercomId
            viewers
            primaryDeviceID
            createdAt
            updatedAt
          }
          activeWeek
          started
          ended
          weeks {
            started
            ended
            locked
            slug
          }
          lessons
          createdAt
          updatedAt
          owner
        }
        primaryDeviceID
        sleepPoints {
          efficiency
          duration
          socialJetLag
          timing
        }
        createdAt
        updatedAt
      }
      activeWeek
      started
      ended
      weeks {
        started
        ended
        locked
        slug
      }
      lessons
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createHabit = /* GraphQL */ `
  mutation CreateHabit($input: CreateHabitInput!) {
    createHabit(input: $input) {
      id
      userId
      user {
        connectionId
        id
        email
        nickname
        darkMode
        intercomId
        viewers
        activeCoaching {
          id
          userId
          user {
            connectionId
            id
            email
            nickname
            darkMode
            intercomId
            viewers
            primaryDeviceID
            createdAt
            updatedAt
          }
          stage
          active {
            connectionId
            id
            email
            nickname
            darkMode
            intercomId
            viewers
            primaryDeviceID
            createdAt
            updatedAt
          }
          activeWeek
          started
          ended
          weeks {
            started
            ended
            locked
            slug
          }
          lessons
          createdAt
          updatedAt
          owner
        }
        primaryDeviceID
        sleepPoints {
          efficiency
          duration
          socialJetLag
          timing
        }
        createdAt
        updatedAt
      }
      dayStreak
      longestDayStreak
      latestCompletedDate
      title
      description
      date
      days {
        key
        value
      }
      archived
      period
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateHabit = /* GraphQL */ `
  mutation UpdateHabit($input: UpdateHabitInput!) {
    updateHabit(input: $input) {
      id
      userId
      user {
        connectionId
        id
        email
        nickname
        darkMode
        intercomId
        viewers
        activeCoaching {
          id
          userId
          user {
            connectionId
            id
            email
            nickname
            darkMode
            intercomId
            viewers
            primaryDeviceID
            createdAt
            updatedAt
          }
          stage
          active {
            connectionId
            id
            email
            nickname
            darkMode
            intercomId
            viewers
            primaryDeviceID
            createdAt
            updatedAt
          }
          activeWeek
          started
          ended
          weeks {
            started
            ended
            locked
            slug
          }
          lessons
          createdAt
          updatedAt
          owner
        }
        primaryDeviceID
        sleepPoints {
          efficiency
          duration
          socialJetLag
          timing
        }
        createdAt
        updatedAt
      }
      dayStreak
      longestDayStreak
      latestCompletedDate
      title
      description
      date
      days {
        key
        value
      }
      archived
      period
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteHabit = /* GraphQL */ `
  mutation DeleteHabit($input: DeleteHabitInput!) {
    deleteHabit(input: $input) {
      id
      userId
      user {
        connectionId
        id
        email
        nickname
        darkMode
        intercomId
        viewers
        activeCoaching {
          id
          userId
          user {
            connectionId
            id
            email
            nickname
            darkMode
            intercomId
            viewers
            primaryDeviceID
            createdAt
            updatedAt
          }
          stage
          active {
            connectionId
            id
            email
            nickname
            darkMode
            intercomId
            viewers
            primaryDeviceID
            createdAt
            updatedAt
          }
          activeWeek
          started
          ended
          weeks {
            started
            ended
            locked
            slug
          }
          lessons
          createdAt
          updatedAt
          owner
        }
        primaryDeviceID
        sleepPoints {
          efficiency
          duration
          socialJetLag
          timing
        }
        createdAt
        updatedAt
      }
      dayStreak
      longestDayStreak
      latestCompletedDate
      title
      description
      date
      days {
        key
        value
      }
      archived
      period
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createNight = /* GraphQL */ `
  mutation CreateNight($input: CreateNightInput!) {
    createNight(input: $input) {
      id
      userId
      user {
        connectionId
        id
        email
        nickname
        darkMode
        intercomId
        viewers
        activeCoaching {
          id
          userId
          user {
            connectionId
            id
            email
            nickname
            darkMode
            intercomId
            viewers
            primaryDeviceID
            createdAt
            updatedAt
          }
          stage
          active {
            connectionId
            id
            email
            nickname
            darkMode
            intercomId
            viewers
            primaryDeviceID
            createdAt
            updatedAt
          }
          activeWeek
          started
          ended
          weeks {
            started
            ended
            locked
            slug
          }
          lessons
          createdAt
          updatedAt
          owner
        }
        primaryDeviceID
        sleepPoints {
          efficiency
          duration
          socialJetLag
          timing
        }
        createdAt
        updatedAt
      }
      sourceId
      sourceName
      value
      startDate
      endDate
      totalDuration
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateNight = /* GraphQL */ `
  mutation UpdateNight($input: UpdateNightInput!) {
    updateNight(input: $input) {
      id
      userId
      user {
        connectionId
        id
        email
        nickname
        darkMode
        intercomId
        viewers
        activeCoaching {
          id
          userId
          user {
            connectionId
            id
            email
            nickname
            darkMode
            intercomId
            viewers
            primaryDeviceID
            createdAt
            updatedAt
          }
          stage
          active {
            connectionId
            id
            email
            nickname
            darkMode
            intercomId
            viewers
            primaryDeviceID
            createdAt
            updatedAt
          }
          activeWeek
          started
          ended
          weeks {
            started
            ended
            locked
            slug
          }
          lessons
          createdAt
          updatedAt
          owner
        }
        primaryDeviceID
        sleepPoints {
          efficiency
          duration
          socialJetLag
          timing
        }
        createdAt
        updatedAt
      }
      sourceId
      sourceName
      value
      startDate
      endDate
      totalDuration
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteNight = /* GraphQL */ `
  mutation DeleteNight($input: DeleteNightInput!) {
    deleteNight(input: $input) {
      id
      userId
      user {
        connectionId
        id
        email
        nickname
        darkMode
        intercomId
        viewers
        activeCoaching {
          id
          userId
          user {
            connectionId
            id
            email
            nickname
            darkMode
            intercomId
            viewers
            primaryDeviceID
            createdAt
            updatedAt
          }
          stage
          active {
            connectionId
            id
            email
            nickname
            darkMode
            intercomId
            viewers
            primaryDeviceID
            createdAt
            updatedAt
          }
          activeWeek
          started
          ended
          weeks {
            started
            ended
            locked
            slug
          }
          lessons
          createdAt
          updatedAt
          owner
        }
        primaryDeviceID
        sleepPoints {
          efficiency
          duration
          socialJetLag
          timing
        }
        createdAt
        updatedAt
      }
      sourceId
      sourceName
      value
      startDate
      endDate
      totalDuration
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createLikedContent = /* GraphQL */ `
  mutation CreateLikedContent($input: CreateLikedContentInput!) {
    createLikedContent(input: $input) {
      id
      name
      type
      slug
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateLikedContent = /* GraphQL */ `
  mutation UpdateLikedContent($input: UpdateLikedContentInput!) {
    updateLikedContent(input: $input) {
      id
      name
      type
      slug
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteLikedContent = /* GraphQL */ `
  mutation DeleteLikedContent($input: DeleteLikedContentInput!) {
    deleteLikedContent(input: $input) {
      id
      name
      type
      slug
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createNightRating = /* GraphQL */ `
  mutation CreateNightRating($input: CreateNightRatingInput!) {
    createNightRating(input: $input) {
      id
      userId
      user {
        connectionId
        id
        email
        nickname
        darkMode
        intercomId
        viewers
        activeCoaching {
          id
          userId
          user {
            connectionId
            id
            email
            nickname
            darkMode
            intercomId
            viewers
            primaryDeviceID
            createdAt
            updatedAt
          }
          stage
          active {
            connectionId
            id
            email
            nickname
            darkMode
            intercomId
            viewers
            primaryDeviceID
            createdAt
            updatedAt
          }
          activeWeek
          started
          ended
          weeks {
            started
            ended
            locked
            slug
          }
          lessons
          createdAt
          updatedAt
          owner
        }
        primaryDeviceID
        sleepPoints {
          efficiency
          duration
          socialJetLag
          timing
        }
        createdAt
        updatedAt
      }
      rating
      date
      createdAt
      updatedAt
    }
  }
`;
export const updateNightRating = /* GraphQL */ `
  mutation UpdateNightRating($input: UpdateNightRatingInput!) {
    updateNightRating(input: $input) {
      id
      userId
      user {
        connectionId
        id
        email
        nickname
        darkMode
        intercomId
        viewers
        activeCoaching {
          id
          userId
          user {
            connectionId
            id
            email
            nickname
            darkMode
            intercomId
            viewers
            primaryDeviceID
            createdAt
            updatedAt
          }
          stage
          active {
            connectionId
            id
            email
            nickname
            darkMode
            intercomId
            viewers
            primaryDeviceID
            createdAt
            updatedAt
          }
          activeWeek
          started
          ended
          weeks {
            started
            ended
            locked
            slug
          }
          lessons
          createdAt
          updatedAt
          owner
        }
        primaryDeviceID
        sleepPoints {
          efficiency
          duration
          socialJetLag
          timing
        }
        createdAt
        updatedAt
      }
      rating
      date
      createdAt
      updatedAt
    }
  }
`;
export const deleteNightRating = /* GraphQL */ `
  mutation DeleteNightRating($input: DeleteNightRatingInput!) {
    deleteNightRating(input: $input) {
      id
      userId
      user {
        connectionId
        id
        email
        nickname
        darkMode
        intercomId
        viewers
        activeCoaching {
          id
          userId
          user {
            connectionId
            id
            email
            nickname
            darkMode
            intercomId
            viewers
            primaryDeviceID
            createdAt
            updatedAt
          }
          stage
          active {
            connectionId
            id
            email
            nickname
            darkMode
            intercomId
            viewers
            primaryDeviceID
            createdAt
            updatedAt
          }
          activeWeek
          started
          ended
          weeks {
            started
            ended
            locked
            slug
          }
          lessons
          createdAt
          updatedAt
          owner
        }
        primaryDeviceID
        sleepPoints {
          efficiency
          duration
          socialJetLag
          timing
        }
        createdAt
        updatedAt
      }
      rating
      date
      createdAt
      updatedAt
    }
  }
`;
export const createFeedback = /* GraphQL */ `
  mutation CreateFeedback($input: CreateFeedbackInput!) {
    createFeedback(input: $input) {
      id
      type
      slug
      rating
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateFeedback = /* GraphQL */ `
  mutation UpdateFeedback($input: UpdateFeedbackInput!) {
    updateFeedback(input: $input) {
      id
      type
      slug
      rating
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteFeedback = /* GraphQL */ `
  mutation DeleteFeedback($input: DeleteFeedbackInput!) {
    deleteFeedback(input: $input) {
      id
      type
      slug
      rating
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment($input: CreateCommentInput!) {
    createComment(input: $input) {
      id
      type
      slug
      firstName
      lastName
      comment
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment($input: UpdateCommentInput!) {
    updateComment(input: $input) {
      id
      type
      slug
      firstName
      lastName
      comment
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment($input: DeleteCommentInput!) {
    deleteComment(input: $input) {
      id
      type
      slug
      firstName
      lastName
      comment
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createNightNote = /* GraphQL */ `
  mutation CreateNightNote($input: CreateNightNoteInput!) {
    createNightNote(input: $input) {
      id
      userId
      user {
        connectionId
        id
        email
        nickname
        darkMode
        intercomId
        viewers
        activeCoaching {
          id
          userId
          user {
            connectionId
            id
            email
            nickname
            darkMode
            intercomId
            viewers
            primaryDeviceID
            createdAt
            updatedAt
          }
          stage
          active {
            connectionId
            id
            email
            nickname
            darkMode
            intercomId
            viewers
            primaryDeviceID
            createdAt
            updatedAt
          }
          activeWeek
          started
          ended
          weeks {
            started
            ended
            locked
            slug
          }
          lessons
          createdAt
          updatedAt
          owner
        }
        primaryDeviceID
        sleepPoints {
          efficiency
          duration
          socialJetLag
          timing
        }
        createdAt
        updatedAt
      }
      date
      dateTime
      content
      meta {
        tags
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateNightNote = /* GraphQL */ `
  mutation UpdateNightNote($input: UpdateNightNoteInput!) {
    updateNightNote(input: $input) {
      id
      userId
      user {
        connectionId
        id
        email
        nickname
        darkMode
        intercomId
        viewers
        activeCoaching {
          id
          userId
          user {
            connectionId
            id
            email
            nickname
            darkMode
            intercomId
            viewers
            primaryDeviceID
            createdAt
            updatedAt
          }
          stage
          active {
            connectionId
            id
            email
            nickname
            darkMode
            intercomId
            viewers
            primaryDeviceID
            createdAt
            updatedAt
          }
          activeWeek
          started
          ended
          weeks {
            started
            ended
            locked
            slug
          }
          lessons
          createdAt
          updatedAt
          owner
        }
        primaryDeviceID
        sleepPoints {
          efficiency
          duration
          socialJetLag
          timing
        }
        createdAt
        updatedAt
      }
      date
      dateTime
      content
      meta {
        tags
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteNightNote = /* GraphQL */ `
  mutation DeleteNightNote($input: DeleteNightNoteInput!) {
    deleteNightNote(input: $input) {
      id
      userId
      user {
        connectionId
        id
        email
        nickname
        darkMode
        intercomId
        viewers
        activeCoaching {
          id
          userId
          user {
            connectionId
            id
            email
            nickname
            darkMode
            intercomId
            viewers
            primaryDeviceID
            createdAt
            updatedAt
          }
          stage
          active {
            connectionId
            id
            email
            nickname
            darkMode
            intercomId
            viewers
            primaryDeviceID
            createdAt
            updatedAt
          }
          activeWeek
          started
          ended
          weeks {
            started
            ended
            locked
            slug
          }
          lessons
          createdAt
          updatedAt
          owner
        }
        primaryDeviceID
        sleepPoints {
          efficiency
          duration
          socialJetLag
          timing
        }
        createdAt
        updatedAt
      }
      date
      dateTime
      content
      meta {
        tags
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
