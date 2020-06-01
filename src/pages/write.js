import React from "react"
import { graphql } from "gatsby"
import classnames from "classnames"
import { useExtraClasses } from "../utils/useExtraClasses"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Link } from "../components/Link"
import HeadingAccentImage from "../svgs/angled-purp-violet-xs.svg"
import styles from "../common/styles/pageStyles/Write.module.css"

const Write = ({ data: { allMdx } }, extraClasses) => {
  const css = useExtraClasses(styles, extraClasses)

  const postListClasses = classnames(css.postUl, css.stackPostList)
  return (
    <Layout>
      <SEO title={`Kathleen McMahon | Writing`} />
      <article className={css.bodyWrapper}>
        <img
          src={HeadingAccentImage}
          alt=""
          className={css.headingAccentImage}
        />

        <header>
          <h1 className={css.writeH1}>
            Cultivated
            <br />
            thoughts <small>{allMdx.totalCount} Posts</small>
          </h1>
        </header>
        <article className={css.contentWrapper}>
          <p className={css.writeIntroPara}>
            This is a gathering of all my thoughts, "digital garden" style. If
            you haven't heard the term before, check out the this{" "}
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
      </article>
    </Layout>
  )
}

export default Write

export const writeQuery = graphql`
  query {
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
