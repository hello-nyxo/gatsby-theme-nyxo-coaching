import AuthorCard from "@components/author/AuthorCard"
import HabitCard from "@components/habit/HabitCard"
import { ContentBlock } from "@components/html/ContentBlock"
import HtmlContent, { H1, H3, H4 } from "@components/html/Html"
import Layout from "@components/Layout/Layout"
import LargeLessonCard from "@components/lesson/LargeLessonCard"
import { LessonMetadata } from "@components/lesson/LessonMetadata"
import { LessonStats } from "@components/lesson/LessonStats"
import { Container, TextContainer } from "@components/Primitives"
import SEO from "@components/SEO/SEO"
import { SharingOptions } from "@components/sharing/SharingOptions"
import TagSection from "@components/tags/Tags"
import { getFirstAuthor } from "@helpers/author"
import {
  useAddBookmark,
  useDeleteBookmark,
  useGetBookmark,
} from "@hooks/useBookmarks"
import { graphql, PageProps } from "gatsby"
import Image, { FluidObject, GatsbyImageProps } from "gatsby-image"
import { useTranslation } from "gatsby-plugin-react-i18next"
import React, { FC } from "react"
import styled from "styled-components"
import { ContentfulLesson } from "@typings/gatsby-graphql"
import { CompleteLesson } from "@components/lesson/CompleteLesson"

type AllPageViews = {
  nodes: { totalCount: number }[]
}

type Props = {
  allPageViews: AllPageViews
  contentfulLesson: ContentfulLesson
  nextLesson: ContentfulLesson
  previousLesson: ContentfulLesson
}

const Lesson: FC<PageProps<Props, { locale: string }>> = ({
  data: {
    nextLesson,
    previousLesson,
    allPageViews: { nodes: allPageViews },
    contentfulLesson: {
      lessonName: title = "",
      lessonContent: content,
      slug,
      createdAt,
      updatedAt,
      cover,
      keywords,
      fields,
      weights,
      authorCard,
      additionalInformation: readMore,
      habit: habits,
    },
  },
  location: { pathname },
}) => {
  const description = fields?.excerpt
  const { t } = useTranslation()
  const { data: bookmarkData, isLoading } = useGetBookmark(
    slug as string,
    "lesson"
  )
  const { mutate: remove, isLoading: removeLoading } = useDeleteBookmark()
  const { mutate: add, isLoading: addLoading } = useAddBookmark()

  const handleBookmarking = async () => {
    if (bookmarkData?.bookmarked) {
      remove({ id: bookmarkData?.id, type: "lesson", slug: `${slug}` })
    } else {
      await add({
        name: title,
        slug: slug as string,
        type: "lesson",
      })
    }
  }

  const mainAuthor = getFirstAuthor(authorCard)

  return (
    <Layout>
      <SEO
        pathName={pathname}
        title={title}
        description={description}
        published={createdAt}
        updated={updatedAt}
        image={cover?.fixed?.src}
        category="Health"
        tags="Sleep"
        author={mainAuthor?.name}
      />

      <TextContainer>
        <TitleContainer>
          <H1>{title}</H1>
          <LessonStats
            pageViews={allPageViews}
            updatedAt={updatedAt}
            readingTime={fields?.readingTime}
            authorCards={authorCard}
          />
        </TitleContainer>

        <SharingOptions
          title={title as string}
          summary={description as string}
          bookmark={handleBookmarking}
          bookmarked={bookmarkData?.bookmarked}
          loading={removeLoading || addLoading || isLoading}
        />

        <Cover>
          <CoverImage fluid={cover?.fluid as FluidObject} />
        </Cover>

        <LessonMetadata slug={`${slug}`} weights={weights} />
        <ContentBlock preview={content} slug={`${slug}`}>
          <HtmlContent document={content} />
          {habits && <H3>{t("HABITS_TO_TRY")}</H3>}
          <Habits>
            {habits?.map((habit) => (
              <HabitCard
                link
                key={`${habit?.slug}`}
                title={habit?.title}
                period={habit?.period}
                slug={`/habit/${habit?.slug}`}
                excerpt={habit?.fields?.excerpt}
              />
            ))}
          </Habits>
          {readMore && (
            <>
              <H3>{t("ADDITIONAL_READING")}</H3>
              <HtmlContent document={readMore} />
            </>
          )}
        </ContentBlock>

        <H4>{t("TAGS")}</H4>
        <Tags>
          <TagSection tags={keywords} />
        </Tags>

        <H4>{t("LESSON_BY")}</H4>
        <Authors>
          {authorCard?.map((author) => (
            <AuthorCard key={`${author?.slug}`} author={author} />
          ))}
        </Authors>

        <CompleteLesson slug={`${slug}`} />
      </TextContainer>

      <Container>
        <hr />
        <MoreLessonsContainer>
          {previousLesson && (
            <LargeLessonCard
              path={`/lesson/${previousLesson.slug}`}
              lesson={previousLesson}
            />
          )}
          {nextLesson && (
            <LargeLessonCard
              path={`/lesson/${nextLesson.slug}`}
              lesson={nextLesson}
            />
          )}
        </MoreLessonsContainer>
      </Container>
    </Layout>
  )
}

export default Lesson

export const pageQuery = graphql`
  query LessonById(
    $slug: String!
    $locale: String!
    $previous: String
    $next: String
    $pathRegex: String
    $language: String
  ) {
    contentfulLesson(slug: { eq: $slug }, node_locale: { eq: $locale }) {
      ...LessonFragment
    }

    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ...LocaleFragment
        }
      }
    }

    allPageViews(filter: { path: { regex: $pathRegex } }) {
      nodes {
        totalCount
      }
    }
    nextLesson: contentfulLesson(
      slug: { eq: $next }
      node_locale: { eq: $locale }
    ) {
      ...LessonFragment
    }
    previousLesson: contentfulLesson(
      slug: { eq: $previous }
      node_locale: { eq: $locale }
    ) {
      ...LessonFragment
    }
  }
`

export const Authors = styled.div`
  display: flex;
  flex-direction: row;
  margin: 2rem -0.5rem;
  flex-wrap: wrap;
`

const Cover = styled.div`
  margin: 1.5rem 0rem 2.5rem;
  height: 30rem;
  max-height: 50vh;
  min-height: 25rem;
  width: 100%;
  box-shadow: 0 30px 60px -10px rgba(0, 0, 0, 0.2),
    0 18px 36px -18px rgba(0, 0, 0, 0.22);
`

const CoverImage = styled(Image)<GatsbyImageProps>`
  height: 100%;
  width: 100%;
`

const Habits = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0rem -0.5rem;
`

const TitleContainer = styled.div`
  text-align: left;
`

const MoreLessonsContainer = styled.div`
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
  margin: 2rem -0.5rem 1rem;
`

const Tags = styled.div`
  margin: 0rem -0.3rem 2rem;
`
