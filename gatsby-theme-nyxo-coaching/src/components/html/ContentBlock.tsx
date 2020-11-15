import { isLoggedIn } from "@auth/auth"
import { Document } from "@contentful/rich-text-types"
import React, { FC } from "react"
import styled from "styled-components"
import HtmlContent, { H3 } from "./Html"

type Props = {
  children: JSX.Element | null
  document: Document
}

export const ContentBlock: FC<Props> = ({ document }) => {
  const canView = isLoggedIn()
  if (isBrowser()) {
    return <>hello</>
  }
  return (
    <Container>
      <H3>To keep reading this lesson, signup for Nyxo</H3>
      <HtmlContent document={document} />
    </Container>
  )
}

const Container = styled.div``

const isBrowser = () => ![typeof window, typeof document].includes("undefined")
