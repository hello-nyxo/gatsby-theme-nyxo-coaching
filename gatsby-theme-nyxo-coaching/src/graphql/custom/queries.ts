export const getActiveCoaching = /* GraphQL */ `
  query GetActiveCoaching($id: ID!) {
    getUser(id: $id) {
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
        weeks {
          slug
          started
          ended
        }
      }
    }
  }
`

export const listCoachees = /* GraphQL */ `
  query ListCoachees(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        email
        nickname
        sleepPoints {
          efficiency
          duration
          socialJetLag
          timing
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`
