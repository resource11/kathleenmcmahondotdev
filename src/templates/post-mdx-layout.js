import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogMDXLayout = ({ data: { mdx }, pageContext }) => {
  // find the fluid image
  const featuredImg = mdx.frontmatter.featuredImage
  let featuredImgFluid = undefined
  if (featuredImg) {
    featuredImgFluid = featuredImg.childImageSharp.fluid
  }

  return (
    <Layout>
      <SEO title={mdx.frontmatter.title} description={mdx.excerpt} />
      <article>
        <header>
          <h1>{mdx.frontmatter.title}</h1>
        </header>
        {featuredImgFluid && <Img fluid={featuredImgFluid} />}
        <article>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </article>
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
