// useContentfulImage.js
import { graphql, useStaticQuery } from "gatsby"

// From https://github.com/contentful/rich-text/issues/70#issuecomment-562997189
export default (assetUrl: string) => {
  const { allContentfulAsset } = useStaticQuery(
    graphql`
      query CONTENTFUL_IMAGE_QUERY {
        allContentfulAsset {
          nodes {
            file {
              url
            }
            fluid(maxWidth: 1050, quality: 85) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    `
  )
  return allContentfulAsset.nodes.find((n) => n.file.url === assetUrl).fluid
}
