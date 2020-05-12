import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import SEO from "../components/seo"
import Layout from "../components/layout"

const dateColor = `purple`

const Home = ({ data: { allMdx } }) => {
  console.log(allMdx)

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
          Welcome to the space where I cultivate my variety of interests.
        </p>
        <h2>Recent talks, podcasts, streams</h2>
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
        <h2>Featured posts</h2>
        {allMdx.edges.map(({ node }) => (
          <ul key={node.id}>
            <li>
              <Link to={`write/${node.frontmatter.slug}`}>
                {node.frontmatter.title}
              </Link>
            </li>
            <span>Published: {node.frontmatter.date}</span>
            <p>{node.excerpt}</p>
          </ul>
        ))}
        <Link to="/write/">Browse all articles</Link>
      </article>
    </Layout>
  )
}

export const indexQuery = graphql`
  query {
    allMdx(filter: { frontmatter: { isFeatured: { eq: true } } }) {
      edges {
        node {
          id
          fields {
            slug
            isFeatured
          }
          frontmatter {
            slug
            title
            isFeatured
          }
          body
        }
      }
      totalCount
    }
  }
`

export default Home
