import { graphql, useStaticQuery } from "gatsby"

type Data = {
  author: string
  title: string
  description: string
  company: string
  siteUrl: string
  social: {
    twitter: string
    linkedIn: string
  }
}

export default function useSiteMetadata(): Data {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author
          title
          company
          description
          siteUrl
        }
      }
    }
  `)
  return data.site.siteMetadata
}
