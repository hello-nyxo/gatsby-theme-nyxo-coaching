import { isLoggedIn } from "@auth/auth"
import { PrimaryButton } from "@components/buttons/PrimaryButton"
import { Document } from "@contentful/rich-text-types"
import { Link, useI18next } from "gatsby-plugin-react-i18next"
import React, { FC, useEffect } from "react"
import styled from "styled-components"
import { H4, HtmlContentWithoutEmbeds, P } from "./Html"

type Props = {
  children?: (Element | null | undefined | JSX.Element)[]
  preview: undefined | any
  slug: string
}

const getVisited = (): Array<string> => {
  if (window.localStorage.visited) {
    const visited = JSON.parse(window.localStorage.visited)
    return visited ? visited : []
  }
  return []
}

const setVisited = (article: string) => {
  if (window.localStorage.visited) {
    const visited = JSON.parse(window.localStorage.visited)
    const newVisited = visited ? [...visited, article] : [article]
    window.localStorage.setItem(
      "visited",
      JSON.stringify([...new Set(newVisited)])
    )
  } else {
    window.localStorage.setItem("visited", JSON.stringify([article]))
  }
}

export const ContentBlock: FC<Props> = ({ children, preview, slug }) => {
  const { navigate, t } = useI18next()
  useEffect(() => {
    setVisited(slug)
  }, [])

  const previewContent = getPreviewFromDocument(
    JSON.parse(preview.raw) as Document
  )

  const visited = getVisited()

  if (!isLoggedIn() && visited.length < 6) {
    return <>{children}</>
  }

  if (!isBrowser || isLoggedIn()) {
    return <>{children}</>
  }

  const register = () => {
    if (typeof window !== "undefined") {
      navigate("/me/register")
    }
  }

  return (
    <Container>
      <PreviewContainer>
        <HtmlContentWithoutEmbeds document={previewContent} />
        <Overlay />
      </PreviewContainer>
      <Prompt>
        <H4>{t("CONTENT_BLOCK.TITLE")}</H4>
        <P>{t("CONTENT_BLOCK.TEXT")}</P>
        <ButtonContainer>
          <PrimaryButton onClick={register}>
            {t("CONTENT_BLOCK.REGISTER")}
          </PrimaryButton>
        </ButtonContainer>
        <P>
          {t("CONTENT_BLOCK.ALREADY")}
          <Link to="/me/login">{t("CONTENT_BLOCK.LOGIN_INSTEAD")}</Link>.
        </P>
      </Prompt>
    </Container>
  )
}

const Container = styled.div`
  margin: 2rem 0rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid ${({ theme }) => theme.HAIRLINE_COLOR};
`
const isBrowser = typeof window !== `undefined`

const getPreviewFromDocument = (document: Document): Document => {
  const { content } = document
  if (content.length > 3) {
    return { ...document, content: content.slice(0, 3) }
  }
  return { ...document }
}

const Prompt = styled.div`
  text-align: center;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4rem 0rem 3rem;
`

const PreviewContainer = styled.div`
  position: relative;
`
const Overlay = styled.div`
  height: 100%;
  width: 100%;
  z-index: 2;
  background: linear-gradient(
    to top,
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0)
  );
  position: absolute;
  bottom: 0;
`
