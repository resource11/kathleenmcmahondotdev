import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from "gatsby-image"
import { useExtraClasses } from "../utils/useExtraClasses"
import SEO from "../components/seo"
import Layout from "../components/layout"

import { Grommet } from "grommet"
import { grommet, dark } from "grommet/themes"

import BlogHeroAccent from "../svgs/blog-hero-accent.svg"
import styles from "../common/styles/pageStyles/PostMDXLayout.module.css"

const BlogMDXLayout = ({ data: { mdx }, extraClasses }) => {
  const css = useExtraClasses(styles, extraClasses)

  // find the fluid image
  const featuredImg = mdx.frontmatter.featuredImage
  let featuredImgFluid = undefined
  if (featuredImg) {
    featuredImgFluid = featuredImg.childImageSharp.fluid
  }

  return (
    // <Grommet
    //   theme={grommet}
    //   full
    //   style={{
    //     display: "flex",
    //     flexDirection: "column",
    //   }}
    // >
    <Layout>
      <SEO title={mdx.frontmatter.title} description={mdx.excerpt} />
      <article className={css.bodyWrapper}>
        <img src={BlogHeroAccent} alt="" className={css.blogHeroAccent} />
        <header className={css.postHeader}>
          <h1 className={css.postH1}>{mdx.frontmatter.title}</h1>
          <small className={css.publishedDateReadTime}>
            <span className={css.published}>Published:</span>{" "}
            {mdx.frontmatter.date} |{" "}
            {Math.round(mdx.fields.readingTime.minutes)} min read
          </small>
        </header>
        {featuredImgFluid && <Img fluid={featuredImgFluid} />}
        <article className={css.contentWrapper}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </article>
      </article>
    </Layout>
    // </Grommet>
  )
}

export const contentQuery = graphql`
  query postQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      excerpt
      wordCount {
        words
      }
      fields {
        readingTime {
          minutes
        }
      }
      frontmatter {
        title
        tags
        isPublished
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          childImageSharp {
            fluid(quality: 90) {
              aspectRatio
              src
              srcSet
              sizes
            }
          }
        }
      }
    }
  }
`

export default BlogMDXLayout
