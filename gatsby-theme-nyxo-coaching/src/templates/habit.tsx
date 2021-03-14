import { SharingOptions } from "@components/sharing/SharingOptions"
import { getFirstLesson } from "@helpers/habit"
import { graphql, PageProps } from "gatsby"
import { useTranslation } from "gatsby-plugin-react-i18next"
import React, { FC } from "react"
import { Blurhash } from "react-blurhash"
import styled from "styled-components"
import { ContentfulHabit } from "@typings/gatsby-graphql"
import HabitCard from "../components/habit/HabitCard"
import HtmlContent, { H1, H3, H4 } from "../components/html/Html"
import { Icon } from "../components/Icons"
import Layout from "../components/Layout/Layout"
import { TextContainer } from "../components/Primitives"
import SEO from "../components/SEO/SEO"
import { getLocalizedPath } from "../helpers/i18n"
import { getIcon } from "../helpers/icon"
import {
  useAddBookmark,
  useDeleteBookmark,
  useGetBookmark,
} from "../hooks/useBookmarks"

type Props = {
  contentfulHabit: ContentfulHabit
  nextHabit: ContentfulHabit
  previousHabit: ContentfulHabit
}

const Habit: FC<PageProps<Props>> = ({ data, location: { pathname } }) => {
  const { contentfulHabit: habit, nextHabit, previousHabit } = data
  const icon = getIcon(habit.period)
  const {
    data: { bookmarked, id },
    isLoading,
  } = useGetBookmark(habit.slug as string, "habit")
  const { mutate: remove, isLoading: removeLoading } = useDeleteBookmark()
  const { mutate: add, isLoading: addLoading } = useAddBookmark()
  const { t } = useTranslation()

  const handleBookmark = async () => {
    if (bookmarked) {
      remove({ id: id, type: "habit" })
    } else {
      await add({
        name: habit.title,
        slug: habit.slug as string,
        type: "habit",
      })
    }
  }

  const { keywords } = getFirstLesson(habit)

  return (
    <Layout>
      <SEO
        pathName={pathname}
        title={habit.title}
        description={habit?.fields?.excerpt as string}
      />

      <TextContainer>
        <Type>
          <Period style={{ color: `${icon.color}` }}>
            <Icon
              name={icon.name}
              height="25px"
              width="25px"
              stroke={icon.color}
            />
            {t(habit.period as string)}
          </Period>
          {t("HABIT")}
        </Type>
        <Title>{habit.title}</Title>
        <Information>
          <Keyword>{keywords[0]}</Keyword>
          <Updated datetime={habit.createdAt}>{habit.createdAt}</Updated>
          <Created datetime={habit.updatedAt}>
            {t("UPDATED")}
            {habit.updatedAt}
          </Created>
        </Information>
        <SharingOptions
          title={habit.title as string}
          summary={habit?.fields?.excerpt as string}
          bookmark={handleBookmark}
          bookmarked={bookmarked}
          loading={removeLoading || addLoading || isLoading}
        />
        <Blurhash
          hash="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
          width="100%"
          height={300}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
        <H3>{t("DESCRIPTION")}</H3>
        <HtmlContent document={habit.description} />

        {habit.lesson?.habit?.map((habit: ContentfulHabit) => (
          <HabitCard
            key={`${habit.slug}`}
            link
            period={habit.period}
            title={habit.title}
            slug={habit.slug}
            excerpt={habit?.fields?.excerpt}
          />
        ))}

        <hr />
      </TextContainer>

      <TextContainer>
        <H4>{t("MORE_HABITS")}</H4>
        <MoreHabitsContainer>
          {nextHabit && (
            <HabitCard
              link
              title={nextHabit.title}
              period={nextHabit.period}
              slug={getLocalizedPath(`/habit/${nextHabit.slug}`, "en-US")}
              excerpt={nextHabit?.fields?.excerpt}
            />
          )}

          {previousHabit && (
            <HabitCard
              link
              title={previousHabit.title}
              period={previousHabit.period}
              slug={getLocalizedPath(`/habit/${previousHabit.slug}`, "en-US")}
              excerpt={previousHabit?.fields?.excerpt}
            />
          )}
        </MoreHabitsContainer>
      </TextContainer>
    </Layout>
  )
}

export default Habit

export const pageQuery = graphql`
  query HabitById(
    $slug: String!
    $locale: String!
    $next: String
    $previous: String
    $language: String
  ) {
    contentfulHabit(slug: { eq: $slug }, node_locale: { eq: $locale }) {
      ...HabitFragment
    }
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ...LocaleFragment
        }
      }
    }

    nextHabit: contentfulHabit(
      slug: { eq: $next }
      node_locale: { eq: $locale }
    ) {
      ...HabitFragment
    }
    previousHabit: contentfulHabit(
      slug: { eq: $previous }
      node_locale: { eq: $locale }
    ) {
      ...HabitFragment
    }
  }
`

const Type = styled.div`
  font-size: 0.9rem;
  font-weight: normal;
  font-family: ${({ theme }) => theme.fontMedium};
  margin-top: 3rem;
  color: ${({ theme }) => theme.textColorSecondary};
  display: inline-block;
  padding: 0.3rem;
  background-color: #f3f3f3;
  border-radius: 0.2rem;
  text-transform: uppercase;
`

const Period = styled.span``

const MoreHabitsContainer = styled.div`
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
  margin: 2rem -0.5rem 1rem;
`

const Title = styled(H1)`
  margin: 0;
`

const Information = styled.div``

const Updated = styled.time`
  font-size: 0.8rem;
`
const Created = styled.time`
  font-size: 0.8rem;
`

const Keyword = styled.span`
  font-size: 0.8rem;
`
