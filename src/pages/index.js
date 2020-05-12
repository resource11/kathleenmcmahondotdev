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
      <SEO title={`Kathleen McMahon | Software Engineer,Designer, Speaker`} />
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
              Software Engineer | Designer | Speaker
            </small>
          </h1>
          <hr />
        </header>
        <p>
          Hello! I'm Kathleen, an engineer, designer, conference speaker, and
          occasional writer with a passion for making inclusive experiences.
          Welcome to the space where I cultivate all the varied things I do.
        </p>
        <h2>Featured speaking</h2>
        <p data-notist="resource11/1ecxhG">
          View{" "}
          <a href="https://noti.st/resource11/1ecxhG">
            Accessibility-flavored React components make your design system
            delicious!
          </a>{" "}
          on Notist.
        </p>
        <script async src="https://on.notist.cloud/embed/002.js"></script>
        <Link to="/speak/">Browse all media</Link>
        <h2>Favorite posts</h2>
        <p>
          I’m an experienced software engineer, product designer, and conference
          speaker with a passion for making inclusive experiences.
        </p>
        <Link to="/write/">Browse all articles</Link>
      </article>
    </Layout>
  )
}

export const indexQuery = graphql`
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
