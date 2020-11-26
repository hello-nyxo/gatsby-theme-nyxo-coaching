import { CoachingPrompt } from "@components/coaching/CoachingPrompt"
import { SharingOptions } from "@components/sharing/SharingOptions"
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer"
import { Document } from "@contentful/rich-text-types"
import { graphql, PageProps } from "gatsby"
import Image, { FluidObject, GatsbyImageProps } from "gatsby-image"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { groupBy } from "lodash"
import React, { FC } from "react"
import styled from "styled-components"
import {
  ContentfulHabit,
  ContentfulLesson,
  ContentfulWeek,
} from "../../graphql-types"
import HabitCard from "../components/habit/HabitCard"
import HtmlContent, { H1, H3, H5, H6, P } from "../components/html/Html"
import { Icon } from "../components/Icons"
import Layout from "../components/Layout/Layout"
import LessonCard from "../components/lesson/LessonCard"
import { Container, device } from "../components/Primitives"
import SEO from "../components/SEO/SEO"
import TagSection from "../components/tags/Tags"
import LargeWeekCard from "../components/week/LargeWeekCard"
import {
  useAddBookmark,
  useDeleteBookmark,
  useGetBookmark,
  useGetLessons,
} from "../hooks/useBookmarks"

type Props = {
  contentfulWeek: ContentfulWeek
  nextWeek: ContentfulWeek
  previousWeek: ContentfulWeek
  habits: { nodes: ContentfulHabit[] }
  tags: {
    group: { fieldValue: string }[]
  }
}

type Lesson = ContentfulLesson & {
  bookmarked?: boolean
}
type Section = {
  title: string
  id: string
  description: { json: Document }
  order: number
}

const Week: FC<PageProps<Props, { locale: string }>> = ({
  data: {
    tags: { group: tags },
    habits: { nodes: habits },
    previousWeek,
    nextWeek,
    contentfulWeek: {
      lessons: pageLessons,
      weekDescription,
      createdAt,
      slug,
      updatedAt,
      weekName: title,
      coverPhoto,
      intro,
    },
  },
  location: { pathname },
}) => {
  const { t } = useTranslation()
  const {
    data: { bookmarked: weekBookmarked, id },
    isLoading: getLoading,
  } = useGetBookmark(slug as string, "week")

  const [remove, { isLoading: removeLoading }] = useDeleteBookmark()
  const [add, { isLoading: addLoading }] = useAddBookmark()

  const initialLessons: Lesson[] = pageLessons?.map((lesson) => ({
    ...(lesson as Lesson),
    bookmarked: false,
  })) as Lesson[]

  const { data, isLoading } = useGetLessons(initialLessons)

  const description = documentToPlainTextString(weekDescription)
  const groupedLessons = groupBy(data, (lesson) => lesson?.section?.title)

  const sectionData: Section[] | undefined = data?.map((item: Lesson) => ({
    title: item?.section?.title,
    id: item?.section?.id,
    description: item?.section?.description,
    order: item?.section?.order,
  }))

  const sections = Object.entries(groupedLessons).map((group) => {
    const header = sectionData?.find((section) => section.title === group[0])
    return {
      header: header,
      lessons: group[1],
    }
  })

  const handleBookmark = async () => {
    if (weekBookmarked) {
      remove({ id: id, type: "week" })
    } else {
      await add({
        name: title,
        slug: slug as string,
        type: "week",
      })
    }
  }

  const handleLessonBookmark = async ({
    bookmarkTitle,
    bookmarkSlug,
    bookmarkType,
  }: {
    bookmarkTitle: string
    bookmarkSlug: string
    bookmarkType: string
  }) => {
    if (weekBookmarked) {
      remove({ id: id, type: "lesson" })
    } else {
      await add({
        name: bookmarkTitle,
        slug: bookmarkSlug,
        type: bookmarkType,
      })
    }
  }

  return (
    <Layout>
      <SEO
        pathName={pathname}
        title={title}
        description={description}
        image={coverPhoto?.fixed?.src}
        category="Health"
        tags="Sleep"
        published={createdAt}
        updated={updatedAt}
      />
      <Container>
        <Type>{t("WEEK")}</Type>
        <Title>{title}</Title>
        <Intro>{intro}</Intro>

        <Cover>
          <CoverImage fluid={coverPhoto?.fluid as FluidObject} />
        </Cover>
        <SharingOptions
          title={title as string}
          summary={description as string}
          loading={removeLoading || addLoading || getLoading}
          bookmark={handleBookmark}
          bookmarked={weekBookmarked}
        />
        <H3>{t("ABOUT_THIS_WEEK")}</H3>

        <Row>
          <Column>
            <HtmlContent document={weekDescription} />

            {tags?.length > 0 && (
              <>
                <TagTitle>
                  <TagIcon />
                  {t("TAGS")}
                </TagTitle>
                <Tags>
                  <TagSection
                    tags={tags.map(
                      ({ fieldValue = "adenosine" }) => fieldValue
                    )}
                  />
                </Tags>
              </>
            )}
          </Column>
          <Column>
            <CoachingPrompt slug={slug} lessons={pageLessons} />
          </Column>
        </Row>

        <H3>{t("LESSONS_FOR_THIS_WEEK")}</H3>
        {sections.map(({ header, lessons }) => (
          <Section key={header?.id}>
            <H6>{header?.title}</H6>
            <HtmlContent document={header?.description as Document} />

            <Lessons>
              {lessons.map((lesson) => {
                const bookmark = () => {
                  handleLessonBookmark({
                    bookmarkTitle: lesson.lessonName,
                    bookmarkSlug: lesson.slug,
                    bookmarkType: "lesson",
                  })
                }

                return (
                  <LessonCard
                    bookmarked={lesson?.bookmarked}
                    key={`${lesson?.slug}`}
                    slug={`${lesson?.slug}`}
                    name={lesson?.lessonName}
                    path={`/lesson/${lesson?.slug}`}
                    onClick={bookmark}
                    lesson={lesson}
                    loading={isLoading}
                    readingTime={lesson?.fields?.readingTime}
                    cover={lesson?.cover?.fluid as FluidObject}
                    excerpt={lesson?.fields?.excerpt}
                  />
                )
              })}
            </Lessons>
          </Section>
        ))}

        {habits?.length > 0 && (
          <>
            <H3>{t("COACHING.HABITS")}</H3>
            <Habits>
              {habits.map((node: ContentfulHabit) => (
                <HabitCard
                  link
                  key={node.slug as string}
                  title={node.title}
                  slug={`/habit/${node.slug}`}
                  excerpt={node.fields?.excerpt}
                  period={node.period}
                />
              ))}
            </Habits>
          </>
        )}

        <hr />
        <H3>{t("MORE_COACHING_WEEKS")}</H3>
        <NextWeeksContainer>
          {previousWeek && (
            <LargeWeekCard
              path={`/week/${previousWeek.slug}`}
              week={previousWeek}
            />
          )}
          {nextWeek && (
            <LargeWeekCard path={`/week/${nextWeek.slug}`} week={nextWeek} />
          )}
        </NextWeeksContainer>
      </Container>
    </Layout>
  )
}

export default Week

export const pageQuery = graphql`
  query WeekById(
    $slug: String!
    $locale: String!
    $previous: String
    $next: String
  ) {
    tags: allContentfulLesson(
      filter: {
        node_locale: { eq: $locale }
        week: { elemMatch: { slug: { eq: $slug } } }
      }
    ) {
      group(field: keywords) {
        fieldValue
      }
    }
    nextWeek: contentfulWeek(
      slug: { eq: $next }
      node_locale: { eq: $locale }
    ) {
      ...WeekFragment
    }
    previousWeek: contentfulWeek(
      slug: { eq: $previous }
      node_locale: { eq: $locale }
    ) {
      ...WeekFragment
    }
    contentfulWeek(slug: { eq: $slug }, node_locale: { eq: $locale }) {
      ...WeekFragment
    }

    habits: allContentfulHabit(
      filter: {
        node_locale: { eq: $locale }
        lesson: { elemMatch: { week: { elemMatch: { slug: { eq: $slug } } } } }
      }
    ) {
      nodes {
        title
        period
        slug
        fields {
          excerpt
        }
        description {
          raw
        }
      }
    }
  }
`

const Section = styled.div`
  margin-bottom: 5rem;
`

const Lessons = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 -0.5rem;
`

const Habits = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0rem -0.5rem;
`

const Column = styled.div`
  flex: 1;
  margin: 0.5rem;

  @media ${device.desktopL} {
    max-width: calc(50% - 2 * 0.5rem);
    flex: 1 1 calc(50% - 2 * 0.5rem);
  }

  @media ${device.desktop} {
    max-width: calc(50% - 2 * 0.5rem);
    flex: 1 1 calc(50% - 2 * 0.5rem);
  }

  @media ${device.laptopL} {
    max-width: calc(50% - 2 * 0.5rem);
    flex: 1 1 calc(50% - 2 * 0.5rem);
  }

  @media ${device.laptop} {
    max-width: calc(50% - 2 * 0.5rem);
    flex: 1 1 calc(50% - 2 * 0.5rem);
  }

  @media ${device.tabletL} {
    max-width: calc(50% - 2 * 0.5rem);
    flex: 1 1 calc(50% - 2 * 0.5rem);
  }

  @media ${device.tablet} {
    max-width: calc(100% - 2 * 0.5rem);
    flex: 1 1 calc(100% - 2 * 0.5rem);
  }

  @media ${device.mobileL} {
    max-width: 100%;
    flex: 1 1 100%;
  }

  @media ${device.mobileM} {
    max-width: 100%;
    flex: 1 1 100%;
  }

  @media ${device.mobileS} {
    max-width: 100%;
    flex: 1 1 100%;
  }
`

const Cover = styled.div`
  margin: 5rem 0rem 2.5rem;
  height: 30rem;
  max-height: 50vh;
  width: 100%;
  box-shadow: 0 30px 60px -10px rgba(0, 0, 0, 0.2),
    0 18px 36px -18px rgba(0, 0, 0, 0.22);
`

const CoverImage = styled(Image)<GatsbyImageProps>`
  height: 100%;
  width: 100%;
`

const TagTitle = styled(H5)`
  margin: 0rem 0rem 1rem;
`

const TagIcon = styled(Icon).attrs(() => ({
  name: "tag",
  fill: "#2c0b8e",
  stroke: "none",
  height: "20px",
  width: "20px",
  viewBox: "0 0 25 25",
}))``

const NextWeeksContainer = styled.div`
  flex-direction: row;
  flex-wrap: wrap;
  display: flex;
  margin: 0rem -0.5rem 2rem;
`

const Tags = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const Type = styled.div`
  font-size: 0.9rem;
  font-weight: normal;
  font-family: ${({ theme }) => theme.FONT_MEDIUM};
  margin-top: 3rem;
  color: ${({ theme }) => theme.SECONDARY_TEXT_COLOR};
  display: inline-block;
  padding: 0.3rem;
  background-color: #f3f3f3;
  border-radius: 0.2rem;
  text-transform: uppercase;
`

const Title = styled(H1)`
  margin: 0;
  line-height: 2.5rem;
  margin: 0.5rem 0rem;
`

const Intro = styled(P)`
  font-size: 0.9rem;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0rem -0.5rem;
`
