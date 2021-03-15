import { Wiggle } from "@components/animated/Wiggle"
import { Icon } from "@components/Icons"
import React, { FC } from "react"
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share"
import styled, { css } from "styled-components"

type Props = {
  shareUrl?: string
  summary: string
  title: string

  bookmarked: boolean | undefined
  loading: boolean
  bookmark: () => void
}

export const SharingOptions: FC<Props> = ({
  title,
  summary,
  bookmarked,
  loading,
  bookmark,
}) => {
  const url = typeof window !== "undefined" ? window.location.href : ""

  return (
    <Container>
      <Wiggle>
        <Email url={url} subject={title} body={summary}>
          <EmailIcon />
        </Email>
      </Wiggle>

      <Wiggle>
        <Facebook url={url} quote={summary}>
          <FacebookIcon />
        </Facebook>
      </Wiggle>

      <Wiggle>
        <LinkedIn url={url} title={title} summary={summary} source="nyxo.app">
          <LinkedInIcon />
        </LinkedIn>
      </Wiggle>

      <Wiggle>
        <Twitter
          url={url}
          title={title}
          via="helloNyxo"
          related={["helloNyxo"]}>
          <TwitterIcon />
        </Twitter>
      </Wiggle>

      <Wiggle>
        <Bookmark disabled={loading} onClick={bookmark} bookmarked={bookmarked}>
          <BookmarkIcon bookmarked={bookmarked} />
        </Bookmark>
      </Wiggle>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  flex-direction: row;
`

const sharedStyle = css``

const Email = styled(EmailShareButton)`
  ${sharedStyle}
`

export const EmailIcon = styled(Icon).attrs(({ theme }) => ({
  fill: "none",
  stroke: theme.textColorSecondary,
  name: "emailSend",
  height: 30,
}))`
  margin: 0px;
  flex: 1;
`

const Facebook = styled(FacebookShareButton)`
  ${sharedStyle}
`

const FacebookIcon = styled(Icon).attrs(({ theme }) => ({
  fill: "none",
  stroke: theme.textColorSecondary,
  name: "facebook",
  height: 30,
}))`
  margin: 0px;
  flex: 1;
`

const LinkedIn = styled(LinkedinShareButton)`
  ${sharedStyle}
`

const LinkedInIcon = styled(Icon).attrs(({ theme }) => ({
  fill: "none",
  stroke: theme.textColorSecondary,
  name: "linkedIn",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  height: 30,
}))`
  margin: 0px;
  flex: 1;
`

const Twitter = styled(TwitterShareButton)`
  ${sharedStyle}
`

const TwitterIcon = styled(Icon).attrs(({ theme }) => ({
  fill: "none",
  stroke: theme.textColorSecondary,
  name: "twitter",
  height: 30,
}))`
  margin: 0px;
  flex: 1;
`

type IconProps = {
  bookmarked: boolean | undefined
  name?: string
}

const Bookmark = styled.button<IconProps>`
  ${sharedStyle}
  cursor: pointer;
  background: none;
  border: none;
`

const BookmarkIcon = styled(Icon).attrs<IconProps>(({ theme, bookmarked }) => ({
  fill: theme.textColorSecondary,
  stroke: "none",
  name: bookmarked ? "heartBookmarkFilled" : "heartBookmarkOutline",
  height: 30,
}))<IconProps>`
  margin: 0px;
  flex: 1;
`
