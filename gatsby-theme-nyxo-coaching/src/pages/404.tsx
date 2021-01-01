import { H3 } from "@components/html/Html"
import Layout from "@components/Layout/Layout"
import { Container } from "@components/Primitives"
import { GlobalSearch } from "@components/search/Search"
import SEO from "@components/SEO/SEO"
import { PageProps } from "gatsby"
import React, { FC } from "react"

const ErroPage: FC<PageProps> = ({ path }) => {
  return (
    <Layout>
      <SEO
        title={"404"}
        description={"Sorry there´s nothing here...yet."}
        staticImage={true}
        pathName={path}
      />

      <Container>
        <H3>Sorry there´s nothing here...yet.</H3>
        <GlobalSearch />
      </Container>
    </Layout>
  )
}

export default ErroPage
