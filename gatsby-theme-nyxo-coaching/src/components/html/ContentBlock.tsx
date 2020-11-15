import { isLoggedIn } from "@auth/auth"
import { PrimaryButton } from "@components/buttons/PrimaryButton"
import { Document } from "@contentful/rich-text-types"
import { Link, useI18next } from "gatsby-plugin-react-i18next"
import React, { FC } from "react"
import styled from "styled-components"
import { H4, HtmlContentWithoutEmbeds, P } from "./Html"

type Props = {
  children: JSX.Element | null
  preview: undefined | any
}

export const ContentBlock: FC<Props> = ({ children, preview }) => {
  const { navigate } = useI18next()

  const previewContent = getPreviewFromDocument(
    JSON.parse(preview.raw) as Document
  )

  console.log(previewContent)

  if (!isBrowser() || isLoggedIn()) {
    return <>{children}</>
  }

  const register = () => {
    navigate("/me/register")
  }

  return (
    <Container>
      <PreviewContainer>
        <HtmlContentWithoutEmbeds document={previewContent} />
        <Overlay />
      </PreviewContainer>
      <Prompt>
        <H4>Read the rest of this story by registering</H4>
        <P>
          You’ll also discover more lessons about sleep personalized to your
          interests and can bookmark your favorite lessons, weeks and habits.
        </P>
        <ButtonContainer>
          <PrimaryButton onClick={register}>Register</PrimaryButton>
        </ButtonContainer>
        <P>
          Already registered? <Link to="/me/login">Login</Link>.
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

const isBrowser = () => ![typeof window, typeof document].includes("undefined")

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
