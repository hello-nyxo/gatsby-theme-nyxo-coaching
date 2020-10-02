import { graphql, useStaticQuery } from "gatsby"

type Data = {
  site: {
    siteMetadata: {
      author: string
      title: string
      description: string
      siteUrl: string
      social: {
        twitter: string
        linkedIn: string
      }
    }
  }
}

export default function useSiteMetadata(): Data {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author
          title
          description
          siteUrl
          social {
            twitter
            linkedIn
          }
        }
      }
    }
  `)
  return data.site.siteMetadata
}
