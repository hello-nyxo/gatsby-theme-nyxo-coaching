import { isLoggedIn } from "@auth/auth"
import { Document } from "@contentful/rich-text-types"
import React, { FC } from "react"
import styled from "styled-components"
import HtmlContent, { H3 } from "./Html"

type Props = {
  children: any
  document: Document
}

const ContentBlock: FC<Props> = ({ document }) => {
  const canView = isLoggedIn()

  return (
    <Container>
      <H3>To keep reading this lesson, signup for Nyxo</H3>

      <HtmlContent document={document} />
    </Container>
  )
}

const Container = styled.div``
