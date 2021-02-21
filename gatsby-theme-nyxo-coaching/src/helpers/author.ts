import { ContentfulAuthor, Maybe } from "@typings/gatsby-graphql"

export const getFirstAuthorName = (
  authorCards?: Maybe<Array<Maybe<ContentfulAuthor>>> | null
): null | undefined | string => {
  return authorCards ? authorCards[0]?.name : null
}

export const getFirstAuthor = (
  authorCards?: Maybe<Array<Maybe<ContentfulAuthor>>> | null
): null | undefined | ContentfulAuthor => {
  return authorCards ? authorCards[0] : null
}

export default getFirstAuthorName
