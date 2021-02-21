import { Icon } from "@components/Icons"
import React, { FC } from "react"
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share"
import styled, { css } from "styled-components"
import { animated } from "react-spring"
import { useBoop } from "@hooks/use-boop"

type Props = {
  shareUrl?: string
  summary: string
  title: string

  bookmarked: boolean | undefined
  loading: boolean
  bookmark: () => void
}

export const SharingOptions: FC<Props> = ({
  shareUrl,
  title,
  summary,
  bookmarked,
  loading,
  bookmark,
}) => {
  const url = typeof window !== "undefined" ? window.location.href : ""

  const [style1, trigger1] = useBoop({ scale: 0.8 })
  const [style2, trigger2] = useBoop({ y: 2 })
  const [style3, trigger3] = useBoop({ x: 2 })
  const [style4, trigger4] = useBoop({ rotation: 2 })

  return (
    <Container>
      <Email url={url} subject={title} body={summary}>
        <EmailIcon />
      </Email>

      <animated.div style={style1}>
        <Facebook url={url} quote={summary} onMouseEnter={trigger1}>
          <FacebookIcon />
        </Facebook>
      </animated.div>

      <animated.div style={style2} onMouseEnter={trigger2}>
        <LinkedIn url={url} title={title} summary={summary} source="nyxo.app">
          <LinkedInIcon />
        </LinkedIn>
      </animated.div>

      <animated.div style={style3} onMouseEnter={trigger3}>
        <Twitter
          url={url}
          title={title}
          via="helloNyxo"
          related={["helloNyxo"]}>
          <TwitterIcon />
        </Twitter>
      </animated.div>

      <animated.div style={style4} onMouseEnter={trigger4}>
        <Bookmark disabled={loading} onClick={bookmark} bookmarked={bookmarked}>
          <BookmarkIcon bookmarked={bookmarked} />
        </Bookmark>
      </animated.div>
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
  stroke: theme.SECONDARY_TEXT_COLOR,
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
  stroke: theme.SECONDARY_TEXT_COLOR,
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
  stroke: theme.SECONDARY_TEXT_COLOR,
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
  stroke: theme.SECONDARY_TEXT_COLOR,
  name: "twitter",
  height: 30,
}))`
  margin: 0px;
  flex: 1;
`

type IconProps = {
  bookmarked: boolean
  name?: string
}

const Bookmark = styled.button<IconProps>`
  ${sharedStyle}
  cursor: pointer;
  background: none;
  border: none;
`

const BookmarkIcon = styled(Icon).attrs<IconProps>(({ theme, bookmarked }) => ({
  fill: theme.SECONDARY_TEXT_COLOR,
  stroke: "none",
  name: bookmarked ? "heartBookmarkFilled" : "heartBookmarkOutline",
  height: 30,
}))<IconProps>`
  margin: 0px;
  flex: 1;
`
