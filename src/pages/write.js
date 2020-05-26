import React from "react"
import { graphql } from "gatsby"
import classnames from "classnames"
import { useExtraClasses } from "../utils/useExtraClasses"
import data from "../../data"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Link } from "../components/Link"
import styles from "../common/styles/pageStyles/Write.module.css"

const Write = ({ data: { site, allMdx } }, extraClasses) => {
  const css = useExtraClasses(styles, extraClasses)

  const postListClasses = classnames(css.postUl, css.stackPostList)
  return (
    <Layout>
      <SEO title={`${site.siteMetadata.title} | Write`} />
      <article>
        <header>
          <h1>
            Cultivated thoughts <small>{allMdx.totalCount} Posts</small>
          </h1>
        </header>
        <p>
          This is a gathering of all my thoughts, "digital garden" style. If you
          haven't heard the term before, check out the this{" "}
          <a href="https://joelhooks.com/digital-garden">
            fantastic post on digital gardens by Joel Hooks
          </a>{" "}
          to learn more about the philosophy behind the phase.
        </p>
        <hr className={css.blueVioletHR} />
        <ul className={postListClasses}>
          {allMdx.edges.map(({ node }) => (
            <li key={node.id} className={css.postListItem}>
              <Link
                to={`write/${node.frontmatter.slug}`}
                variant="link"
                extraClasses={{ root: css.postListLink }}
              >
                {node.frontmatter.title}
              </Link>
              <span className={css.postListPublishedDate}>
                <span className={css.postListPublished}>Published:</span>{" "}
                {node.frontmatter.date}
              </span>
              <p className={css.postListExcerpt}>{node.excerpt}</p>
            </li>
          ))}
        </ul>
      </article>
    </Layout>
  )
}

export default Write

export const writeQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      filter: { frontmatter: { isPublished: { ne: false } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            author
            date(formatString: "MMMM DD, YYYY")
            description
            isHidden
            isPublished
            slug
            tags
            title
          }
          body
          excerpt
          timeToRead
        }
      }
      totalCount
    }
  }
`
