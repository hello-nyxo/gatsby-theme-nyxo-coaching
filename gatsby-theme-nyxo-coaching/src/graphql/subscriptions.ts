/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSleepData = /* GraphQL */ `
  subscription OnCreateSleepData($owner: String, $viewers: String) {
    onCreateSleepData(owner: $owner, viewers: $viewers) {
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
export const onUpdateSleepData = /* GraphQL */ `
  subscription OnUpdateSleepData($owner: String, $viewers: String) {
    onUpdateSleepData(owner: $owner, viewers: $viewers) {
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
export const onDeleteSleepData = /* GraphQL */ `
  subscription OnDeleteSleepData($owner: String, $viewers: String) {
    onDeleteSleepData(owner: $owner, viewers: $viewers) {
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
export const onCreateRequest = /* GraphQL */ `
  subscription OnCreateRequest($owner: String, $userId: String) {
    onCreateRequest(owner: $owner, userId: $userId) {
      id
      requesterName
      requesterId
      userName
      userId
      accepted
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateRequest = /* GraphQL */ `
  subscription OnUpdateRequest($owner: String, $userId: String) {
    onUpdateRequest(owner: $owner, userId: $userId) {
      id
      requesterName
      requesterId
      userName
      userId
      accepted
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteRequest = /* GraphQL */ `
  subscription OnDeleteRequest($owner: String, $userId: String) {
    onDeleteRequest(owner: $owner, userId: $userId) {
      id
      requesterName
      requesterId
      userName
      userId
      accepted
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String, $viewers: String) {
    onCreateUser(owner: $owner, viewers: $viewers) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String, $viewers: String) {
    onUpdateUser(owner: $owner, viewers: $viewers) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String, $viewers: String) {
    onDeleteUser(owner: $owner, viewers: $viewers) {
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
export const onCreateCoachingData = /* GraphQL */ `
  subscription OnCreateCoachingData($owner: String, $viewers: String) {
    onCreateCoachingData(owner: $owner, viewers: $viewers) {
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
export const onUpdateCoachingData = /* GraphQL */ `
  subscription OnUpdateCoachingData($owner: String, $viewers: String) {
    onUpdateCoachingData(owner: $owner, viewers: $viewers) {
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
export const onDeleteCoachingData = /* GraphQL */ `
  subscription OnDeleteCoachingData($owner: String, $viewers: String) {
    onDeleteCoachingData(owner: $owner, viewers: $viewers) {
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
export const onCreateHabit = /* GraphQL */ `
  subscription OnCreateHabit($owner: String, $viewers: String) {
    onCreateHabit(owner: $owner, viewers: $viewers) {
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
export const onUpdateHabit = /* GraphQL */ `
  subscription OnUpdateHabit($owner: String, $viewers: String) {
    onUpdateHabit(owner: $owner, viewers: $viewers) {
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
export const onDeleteHabit = /* GraphQL */ `
  subscription OnDeleteHabit($owner: String, $viewers: String) {
    onDeleteHabit(owner: $owner, viewers: $viewers) {
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
export const onCreateLikedContent = /* GraphQL */ `
  subscription OnCreateLikedContent($owner: String) {
    onCreateLikedContent(owner: $owner) {
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
export const onUpdateLikedContent = /* GraphQL */ `
  subscription OnUpdateLikedContent($owner: String) {
    onUpdateLikedContent(owner: $owner) {
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
export const onDeleteLikedContent = /* GraphQL */ `
  subscription OnDeleteLikedContent($owner: String) {
    onDeleteLikedContent(owner: $owner) {
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
export const onCreateNightRating = /* GraphQL */ `
  subscription OnCreateNightRating($owner: String, $viewers: String) {
    onCreateNightRating(owner: $owner, viewers: $viewers) {
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
      owner
    }
  }
`;
export const onUpdateNightRating = /* GraphQL */ `
  subscription OnUpdateNightRating($owner: String, $viewers: String) {
    onUpdateNightRating(owner: $owner, viewers: $viewers) {
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
      owner
    }
  }
`;
export const onDeleteNightRating = /* GraphQL */ `
  subscription OnDeleteNightRating($owner: String, $viewers: String) {
    onDeleteNightRating(owner: $owner, viewers: $viewers) {
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
      owner
    }
  }
`;
export const onCreateFeedback = /* GraphQL */ `
  subscription OnCreateFeedback($owner: String) {
    onCreateFeedback(owner: $owner) {
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
export const onUpdateFeedback = /* GraphQL */ `
  subscription OnUpdateFeedback($owner: String) {
    onUpdateFeedback(owner: $owner) {
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
export const onDeleteFeedback = /* GraphQL */ `
  subscription OnDeleteFeedback($owner: String) {
    onDeleteFeedback(owner: $owner) {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($owner: String) {
    onCreateComment(owner: $owner) {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($owner: String) {
    onUpdateComment(owner: $owner) {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($owner: String) {
    onDeleteComment(owner: $owner) {
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
export const onCreateNightNote = /* GraphQL */ `
  subscription OnCreateNightNote($owner: String, $viewers: String) {
    onCreateNightNote(owner: $owner, viewers: $viewers) {
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
export const onUpdateNightNote = /* GraphQL */ `
  subscription OnUpdateNightNote($owner: String, $viewers: String) {
    onUpdateNightNote(owner: $owner, viewers: $viewers) {
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
export const onDeleteNightNote = /* GraphQL */ `
  subscription OnDeleteNightNote($owner: String, $viewers: String) {
    onDeleteNightNote(owner: $owner, viewers: $viewers) {
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
export const onCreateNight = /* GraphQL */ `
  subscription OnCreateNight($owner: String, $viewers: String) {
    onCreateNight(owner: $owner, viewers: $viewers) {
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
export const onUpdateNight = /* GraphQL */ `
  subscription OnUpdateNight($owner: String, $viewers: String) {
    onUpdateNight(owner: $owner, viewers: $viewers) {
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
export const onDeleteNight = /* GraphQL */ `
  subscription OnDeleteNight($owner: String, $viewers: String) {
    onDeleteNight(owner: $owner, viewers: $viewers) {
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
