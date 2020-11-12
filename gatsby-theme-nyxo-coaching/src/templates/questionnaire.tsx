import { Formik } from "formik"
import { graphql, PageProps } from "gatsby"
import React, { FC, useState } from "react"
import Select from "react-select"
import styled from "styled-components"
import {
  ContentfulAnswer,
  ContentfulQuestion,
  ContentfulQuestionnaire,
} from "../../graphql-types"
import HtmlContent, { H4 } from "../components/html/Html"
import Layout from "../components/Layout/Layout"
import { Container } from "../components/Primitives"
import SEO from "../components/SEO/SEO"

interface Props {
  contentfulQuestionnaire: ContentfulQuestionnaire
}

const Questionnaire: FC<PageProps<Props>> = (props) => {
  const {
    data: {
      contentfulQuestionnaire: {
        title,
        questions,
        results,
        description: {
          json: description,
          fields: { excerpt },
        },
      },
    },
    location: { pathname },
  } = props

  const [score, setScore] = useState(0)
  console.log(props)

  const defaultValues = questions?.map((question) => {
    const score = question?.answers ? question?.answers[0]?.score : 0
    const title = question?.answers ? question?.answers[0]?.title : "title"

    return {
      [question?.title as string]: {
        title: question?.title,
        answer: {
          value: score,
          label: title,
        },
      },
    }
  })

  const calculateResult = (values: [any]) => {
    values.forEach((value, index) => {
      console.log(value[`Question_${index + 1}`]["answer"]["value"])
      setScore(score + value[`Question_${index + 1}`]["answer"]["value"])
    })
  }

  return (
    <Layout>
      <SEO pathName={pathname} title={title} description={excerpt} />
      <Container>
        <Formik initialValues={defaultValues} onSubmit={calculateResult}>
          {({ handleChange, submitForm, values }) => (
            <>
              {questions?.map((q) => {
                const {
                  title = "Question",
                  answers,
                  type,
                  question: { question = "Question" as string },
                } = q as ContentfulQuestion

                // console.log("value", values)
                if (type === "Select") {
                  const options = answers?.map((answer) => ({
                    value: answer?.score,
                    label: answer?.title,
                  }))
                  // const defaultValue = values.find(value => )
                  return (
                    <Question key={title as string}>
                      <QuestionTitle>{question}</QuestionTitle>

                      <Select
                        className="basic-single"
                        classNamePrefix="select"
                        isDisabled={false}
                        isLoading={false}
                        isClearable={true}
                        onChange={(options) => handleChange(title)}
                        name={title}
                        options={options}
                      />
                    </Question>
                  )
                } else if (type === "Slider") {
                  return (
                    <Question key={title as string}>
                      <H4>{question}</H4>

                      <input type="range" />
                    </Question>
                  )
                } else {
                  return (
                    <Question key={title as string}>
                      <H4>{question}</H4>

                      {answers?.map(({ title = "" }: ContentfulAnswer) => (
                        <Answer key={title}>{title}</Answer>
                      ))}
                    </Question>
                  )
                }
              })}

              {results?.map((result) => (
                <Result key={result?.title as string}>
                  <H4>{result?.title}</H4>
                  <HtmlContent document={result?.description?.json} />
                  <HtmlContent document={result?.details?.json} />
                </Result>
              ))}

              <button onClick={submitForm}>get results</button>
              {score}
            </>
          )}
        </Formik>
      </Container>
    </Layout>
  )
}

export default Questionnaire

const Question = styled.div``
const Answer = styled.div``
const Result = styled.div``

const QuestionTitle = styled.h5``

export const pageQuery = graphql`
  query QuestionById($slug: String!) {
    contentfulQuestionnaire(slug: { eq: $slug }) {
      title
      slug
      description {
        fields {
          excerpt
        }
        json
      }
      questions {
        title
        id
        type
        question {
          question
        }
        answers {
          ... on ContentfulAnswer {
            score
            title
          }
        }
      }
      results {
        description {
          json
        }
        details {
          json
        }
        scoreRange {
          highEnd
          lowEnd
        }
        title
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
