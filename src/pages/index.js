import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import SEO from "../components/seo"
import Layout from "../components/layout"

const dateColor = `purple`

export default ({ data }) => {
  console.log(data)

  return (
    <Layout>
      <SEO
        title={`Kathleen McMahon | Software Engineer | UX Designer | Speaker`}
      />
      <article>
        <header>
          <h1>
            Kathleen McMahon{" "}
            <small
              css={css`
                color: slategrey;
                display: inline-block;
              `}
            >
              Software Engineer | UX Designer | Speaker
            </small>
          </h1>
          <hr />
        </header>
        <h2>What I do</h2>
        <p>
          I’m an experienced software engineer, product designer, and
          internationally-known conference speaker with a passion for making
          inclusive and accessible experiences.
        </p>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile(filter: { extension: { eq: "mdx" } }) {
      edges {
        node {
          childMdx {
            body
            frontmatter {
              author
              date(formatString: "MMMM DD, YYYY")
              slug
              title
            }
            excerpt
            id
          }
        }
      }
      totalCount
    }
  }
`
