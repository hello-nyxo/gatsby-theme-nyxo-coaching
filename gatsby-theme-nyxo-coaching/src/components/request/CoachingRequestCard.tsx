import { formatDistanceToNowStrict } from "date-fns"
import React, { FC } from "react"
import styled from "styled-components"
import fi from "date-fns/locale/fi"
import { useAcceptRequest, useDeleteRequest } from "@hooks/useRequest"
import { P } from "@components/html/Html"

type Props = {
  created: undefined | string
  id: undefined | string
  sender: undefined | string
}

export const CoachingRequestCard: FC<Props> = ({ created, sender, id }) => {
  const [mutate] = useDeleteRequest()
  const [accept] = useAcceptRequest()

  const handleDelete = async () => {
    await mutate({ id: id })
  }

  const handleAccept = async () => {
    await accept({ id: id })
  }

  return (
    <OuterContainer>
      <Container>
        <Column>
          <Row>
            <Sender>{sender}</Sender>
            <Time>{`${formatDistanceToNowStrict(new Date(created), {
              locale: fi,
            })} sitten`}</Time>
          </Row>
          <Text>Pyytää oikeutta univalmennukseen.</Text>
        </Column>
        <Buttons>
          <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
          <AcceptButton onClick={handleAccept}>Accept</AcceptButton>
        </Buttons>
      </Container>
    </OuterContainer>
  )
}

const OuterContainer = styled.div`
  display: inline-block;
  margin: 0.5rem;
`
const Container = styled.div`
  width: auto;

  box-shadow: ${({ theme }) => theme.SHADOW};
  margin: 1rem 0rem;
  background-color: ${({ theme }) => theme.SECONDARY_BACKGROUND_COLOR};
  border-radius: 0.5rem;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  overflow: hidden;
`

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 1px solid ${({ theme }) => theme.HAIRLINE_COLOR};
`

const AcceptButton = styled.button`
  border: none;
  border-top: 1px solid ${({ theme }) => theme.HAIRLINE_COLOR};
  padding: 0.75rem 1.5rem;
  font-size: 0.8rem;
  height: 100%;
  border-bottom-right-radius: 0.5rem;
  background-color: ${({ theme }) => theme.SECONDARY_BACKGROUND_COLOR};
  font-family: ${({ theme }) => theme.FONT_MEDIUM};

  &:hover {
    background-color: ${({ theme }) => theme.PRIMARY_BACKGROUND_COLOR};
  }
`

const DeleteButton = styled.button`
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 0.8rem;
  background-color: none;
  height: 100%;
  border-top-right-radius: 0.5rem;
  background-color: ${({ theme }) => theme.SECONDARY_BACKGROUND_COLOR};
  font-family: ${({ theme }) => theme.FONT_MEDIUM};
  &:hover {
    background-color: ${({ theme }) => theme.PRIMARY_BACKGROUND_COLOR};
  }
`

const Column = styled.div`
  padding: 1rem 2.5rem 1rem 1rem;
  min-width: 15rem;
  flex: 1;
`

const Sender = styled.div`
  color: ${({ theme }) => theme.PRIMARY_TEXT_COLOR};
  font-family: ${({ theme }) => theme.FONT_MEDIUM};
  font-size: 0.9rem;
`

const Text = styled.p`
  font-size: 0.9rem;
  font-family: ${({ theme }) => theme.FONT_MEDIUM};
  color: ${({ theme }) => theme.SECONDARY_TEXT_COLOR};
`

const Row = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const Time = styled.div`
  color: ${({ theme }) => theme.SECONDARY_TEXT_COLOR};
  font-family: ${({ theme }) => theme.FONT_REGULAR};
  font-size: 0.75rem;
`
