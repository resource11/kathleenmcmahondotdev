import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from "gatsby-image"
import { useExtraClasses } from "../utils/useExtraClasses"
import SEO from "../components/seo"
import Layout from "../components/layout"
import BlogHeroAccent from "../svgs/blog-hero-accent.svg"
import styles from "../common/styles/pageStyles/PostMDXLayout.module.css"

const BlogMDXLayout = ({ data: { mdx }, pageContext, extraClasses }) => {
  const css = useExtraClasses(styles, extraClasses)

  // find the fluid image
  const featuredImg = mdx.frontmatter.featuredImage
  let featuredImgFluid = undefined
  if (featuredImg) {
    featuredImgFluid = featuredImg.childImageSharp.fluid
  }

  return (
    <Layout>
      <SEO title={mdx.frontmatter.title} description={mdx.excerpt} />
      <article className={css.bodyWrapper}>
        <img src={BlogHeroAccent} alt="" className={css.blogHeroAccent} />
        <header className={css.postHeader}>
          <h1 className={css.postH1}>{mdx.frontmatter.title}</h1>
        </header>
        {featuredImgFluid && <Img fluid={featuredImgFluid} />}
        <article className={css.contentWrapper}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </article>
        {/* </article> */}
      </article>
    </Layout>
  )
}

// export const contentQuery = graphql`
//   query postQuery($id: String) {
//     mdx(id: { eq: $id }) {
//       id
//       body
//       excerpt
//       timeToRead
//       wordCount {
//         words
//       }
//       fields {
//         slug
//       }
//       frontmatter {
//         title
//         tags
//         published
//         date(formatString: "MMMM DD, YYYY")
//         featuredImage {
//           childImageSharp {
//             fluid(quality: 90) {
//               aspectRatio
//               src
//               srcSet
//               sizes
//             }
//           }
//         }
//         embeddedImages {
//           publicURL
//           childImageSharp {
//             fluid {
//               base64
//               tracedSVG
//               aspectRatio
//               src
//               srcSet
//               srcWebp
//               srcSetWebp
//               sizes
//               originalImg
//               originalName
//               presentationWidth
//               presentationHeight
//             }
//           }
//         }
//       }
//     }
//   }
// `

export const contentQuery = graphql`
  query postQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      excerpt
      timeToRead
      wordCount {
        words
      }
      fields {
        slug
      }
      frontmatter {
        title
        tags
        isPublished
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`

export default BlogMDXLayout
