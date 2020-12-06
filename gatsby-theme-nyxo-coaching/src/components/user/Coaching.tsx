import { useTranslation } from "gatsby-plugin-react-i18next"
import React, { FC } from "react"
import styled from "styled-components"
import { useListCoaching } from "../../hooks/useCoaching"
import { useGetActiveCoaching, useUpdateUser } from "../../hooks/useUser"
import CoachingCard from "@components/coaching/CoachingCard"
import { H2, H4, H5 } from "@components/html/Html"
import { graphql, useStaticQuery } from "gatsby"
import WeekCard from "@components/week/WeekCard"
import { getTimeOrDistance } from "@helpers/time"

const Coaching: FC = () => {
  const {
    allContentfulWeek: { nodes: weekContent },
    allContentfulLesson: { nodes: lessonContent },
  } = useStaticQuery(graphql`
    query {
      allContentfulLesson(filter: { node_locale: { eq: "en-US" } }) {
        nodes {
          ...LessonFragment
        }
      }

      allContentfulWeek(filter: { node_locale: { eq: "en-US" } }) {
        nodes {
          ...WeekFragment
        }
      }
    }
  `)

  const { t } = useTranslation()
  const { data: coaching } = useListCoaching()
  const { data: active } = useGetActiveCoaching()
  const [mutate] = useUpdateUser()

  const activeWeek = weekContent?.find(
    (week) => week.slug === active?.activeWeek
  )

  const setActive = (id: string) => {
    mutate({
      user: {
        userActiveCoachingId: id,
      },
    })
  }

  return (
    <Container>
      <H2>{t("COACHING.SLEEP_COACHING")}</H2>

      {active && (
        <>
          <H4>{t("USER.CURRENTLY_ACTIVE")}</H4>
          <div>Alkoi</div>
          <div>{getTimeOrDistance(active?.started)}</div>

          <div>Aktiivinen viikko</div>
          {activeWeek ? (
            <WeekCard
              lessons={activeWeek.lessons}
              name={activeWeek.name}
              bookmarked={false}
              path={`/week/${activeWeek?.slug}`}
              intro={activeWeek?.intro}
              name={activeWeek?.weekName}
              duration={activeWeek?.duration}
              lessons={activeWeek?.lessons}
              coverPhoto={activeWeek?.coverPhoto?.fluid as FluidObject}
              slug={activeWeek.slug}
            />
          ) : null}
        </>
      )}

      {/* <pre>{JSON.stringify(active, undefined, 4)}</pre> */}

      <H4>{t("USER.ALL_COACHING_DATA")}</H4>
      {coaching?.items?.map((item) => (
        <CoachingCard
          key={`${item?.id}`}
          coaching={item}
          onClick={() => setActive(item?.id)}
        />
      ))}
    </Container>
  )
}

export default Coaching

const Container = styled.div`
  padding: 1rem 0rem;
`

const ID = styled.div`
  color: var(--textSecondary);
  font-size: 0.8rem;
  font-family: var(--medium);
`

const Card = styled.div`
  padding: 1rem;
  background-color: var(--secondaryBg);
  box-shadow: var(--shadow);
  margin: 1rem 0rem;

  ${H5} {
    margin: 0 0 0.5rem 0;
  }
`
