import { H3 } from "@components/html/Html"
import { Icon } from "@components/Icons"
import useOnClickOutside from "@hooks/useOnClickOutside"
import { Link, useI18next, useTranslation } from "gatsby-plugin-react-i18next"
import { throttle } from "lodash"
import React, {
  ChangeEventHandler,
  FC,
  useEffect,
  useRef,
  useState,
} from "react"
import { animated } from "react-spring"
import styled from "styled-components"

type SearchResult = {
  ref: string
  id: string
  type: string
  slug: string
  title: string
  content: string
}

declare global {
  interface Window {
    __LUNR__: {
      [key: string]: {
        store: {
          [key: string]: SearchResult
        }
        index: {
          search: (val: string) => SearchResult[]
        }
      }
    }
  }
}

const searchContent = throttle((queryString: string, locale: string) => {
  if (window.__LUNR__[locale]) {
    try {
      const lunrIndex = window.__LUNR__[locale]
      const searchResults = lunrIndex.index
        .search(`${queryString}*`)
        .slice(0, 40)
      return searchResults.map(({ ref }) => lunrIndex.store[ref])
    } catch {
      console.error(`Lunr is having issues querying for '${queryString}'`)
    }
  }
}, 150)

export const GlobalSearch: FC = () => {
  const { t } = useTranslation()
  const { language } = useI18next()

  const containerRef = useRef(null)

  const [query, setQuery] = useState("")
  const [results, setResults] = useState<Array<SearchResult>>([])

  useEffect(() => {
    if (query) {
      const searchResults = searchContent(query, language) || []
      setResults(searchResults)
    } else {
      setResults([])
    }
    return () => {
      setResults([])
    }
  }, [query])

  const search: ChangeEventHandler<HTMLInputElement> = (event) => {
    setQuery(event.target.value)
  }

  useOnClickOutside(containerRef, () => {
    setQuery("")
    setResults([])
  })

  return (
    <Container>
      <InnerContainer>
        <H3>{t("SEARCH_BOX.TITLE")}</H3>
        <SearchContainer ref={containerRef}>
          <SearchBox>
            <MagnifyingGlass name="search" height="30" width="30" />
            <SearchField
              type="text"
              value={query}
              onChange={search}
              placeholder={`${t("SEARCH_BOX.PLACEHOLDER")}`}
            />
          </SearchBox>

          <Results>
            {results.length > 0 && <ResultType>Lessons</ResultType>}
            {results.map((item, i) => (
              <Result key={`${item.id}_${i}`}>
                <Link to={`/${item.type}/${item.slug}`}>
                  <Type>{item.type}</Type>
                  <Title>{item.title}</Title>
                </Link>
              </Result>
            ))}
            {results.length > 0 && <ResultCount>{results.length}</ResultCount>}
          </Results>
        </SearchContainer>
      </InnerContainer>
    </Container>
  )
}

const Container = styled.div`
  box-sizing: border-box;
  padding: 2rem;
  background-color: ${({ theme }) => theme.bgPrimary};
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

const ResultType = styled.div`
  margin: 1rem 0.5rem;
  font-size: 1rem;

  height: 1rem;
  color: ${({ theme }) => theme.textColorSecondary};
`

const Type = styled.span`
  background-color: ${({ theme }) => theme.buttonColorPrimary};
  color: white;
  font-family: ${({ theme }) => theme.fontMedium};
  font-size: 0.6rem;
  text-transform: uppercase;
  padding: 0.2rem 0.4rem;
  border-radius: 0.4rem;
  margin-right: 0.5rem;
`
const Title = styled.span`
  color: ${({ theme }) => theme.textColorPrimary};
`

const Results = styled.ul`
  max-height: 20rem;
  overflow-y: scroll;
`

const ResultCount = styled.div`
  color: ${({ theme }) => theme.textColorSecondary};
`

const Result = styled(animated.li)`
  color: ${({ theme }) => theme.textColorPrimary};
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.bgPrimary};
  margin: 0.5rem;

  ${Title} {
    color: ${({ theme }) => theme.textColorPrimary};
  }
`

const SearchContainer = styled.div`
  background-color: ${({ theme }) => theme.bgSecondary};
  box-shadow: ${({ theme }) => theme.shadow};
  width: 100%;
  border-radius: 0.5rem;
`

const MagnifyingGlass = styled(Icon).attrs(({ theme }) => ({
  stroke: theme.textColorSecondary,
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
  border-bottom: 1px solid ${({ theme }) => theme.hairlineColor};
`
