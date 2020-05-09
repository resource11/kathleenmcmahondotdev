import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogMDXLayout = ({ pageContext }) => {
  // const post = data.markdownRemark
  // find the fluid image
  // let featuredImgFluid =
  //   pageContext.frontmatter.featuredImage.childImageSharp.fluid
  return (
    <Layout>
      <SEO
        title={pageContext.frontmatter.title}
        description={pageContext.excerpt}
      />
      <article>
        <header>
          <h1>{pageContext.frontmatter.title}</h1>
          {/* {featuredImage && <Img fluid={featuredImgFluid} />} */}
        </header>
        <div>
          <MDXRenderer>{pageContext.body}</MDXRenderer>
        </div>
      </article>
    </Layout>
  )
}

export default BlogMDXLayout
