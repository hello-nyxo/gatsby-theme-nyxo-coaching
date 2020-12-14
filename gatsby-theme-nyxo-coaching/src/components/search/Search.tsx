import React, { ChangeEventHandler, FC, useRef, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby-plugin-react-i18next"
import { Index } from "elasticlunr"
import styled from "styled-components"
import { Icon } from "@components/Icons"
import { H3 } from "@components/html/Html"
import { useTransition, animated } from "react-spring"
import { throttle } from "lodash"
import useOnClickOutside from "@hooks/useOnClickOutside"

type SearchResult = {
  id: string
  type: string
  slug: string
  title: string
  content: string
}

export const GlobalSearch: FC = () => {
  const data = useStaticQuery(graphql`
    query SearchIndexQuery {
      siteSearchIndex {
        index
      }
    }
  `)
  const containerRef = useRef(null)

  const index = Index.load(data.siteSearchIndex.index)
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<Array<SearchResult>>([])

  const search: ChangeEventHandler<HTMLInputElement> = throttle((event) => {
    setQuery(event.target.value)
    const res: SearchResult[] = index
      .search(query, { expand: true })
      .map(({ ref }) => index.documentStore.getDoc(ref)) as SearchResult[]
    setResults(res)
  }, 150)

  const transitions = useTransition(
    results.map((data) => ({ ...data, height: 20, y: 0 })),
    (d) => d.id,
    {
      from: { height: 0, opacity: 0 },
      leave: { height: 0, opacity: 0 },
      enter: ({ y, height }) => ({ y, height, opacity: 1 }),
      update: ({ y, height }) => ({ y, height }),
    }
  )

  useOnClickOutside(containerRef, () => {
    setQuery("")
    setResults([])
  })

  return (
    <Container>
      <InnerContainer>
        <H3>Try search</H3>
        <SearchContainer ref={containerRef}>
          <SearchBox>
            <MagnifyingGlass name="search" height="30" width="30" />
            <SearchField
              type="text"
              value={query}
              onChange={search}
              placeholder="Search for anything"
            />
          </SearchBox>
          <Results>
            {results.map((item) => (
              <Result key={item.id + index}>
                <Link to={`/${item.type}/${item.slug}`}>
                  <Title>{item.title}</Title>
                </Link>
              </Result>
            ))}
          </Results>
        </SearchContainer>
      </InnerContainer>
    </Container>
  )
}

const Container = styled.div`
  box-sizing: border-box;
  padding: 2rem;
  background-color: ${({ theme }) => theme.PRIMARY_BACKGROUND_COLOR};
  width: 100vw;
  position: relative;
  height: 30rem;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
`

const InnerContainer = styled.div`
  max-width: 1440px;
  margin: 2rem auto;
`

const Title = styled.span`
  color: ${({ theme }) => theme.PRIMARY_TEXT_COLOR};
`

const Results = styled.ul`
  max-height: 30rem;
  overflow-y: scroll;
`

const Result = styled(animated.li)`
  color: ${({ theme }) => theme.PRIMARY_TEXT_COLOR};
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.PRIMARY_BACKGROUND_COLOR};
  margin: 0.5rem;

  ${Title} {
    color: ${({ theme }) => theme.PRIMARY_TEXT_COLOR};
  }
`

const SearchContainer = styled.div`
  background-color: ${({ theme }) => theme.SECONDARY_BACKGROUND_COLOR};
  box-shadow: ${({ theme }) => theme.SHADOW};
  width: 100%;
  border-radius: 0.5rem;
`

const MagnifyingGlass = styled(Icon).attrs(({ theme }) => ({
  stroke: theme.SECONDARY_TEXT_COLOR,
}))``

const SearchField = styled.input`
  padding: 1rem;
  font-size: 1.5rem;
  outline: none;
  border: none;
  width: 100%;
`

const SearchBox = styled.div`
  padding: 1rem;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.HAIRLINE_COLOR};
`
