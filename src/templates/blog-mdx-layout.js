import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogMDXLayout = ({ pageContext }) => {
  return (
    <Layout>
      <SEO
        title={pageContext.frontmatter.title}
        description={pageContext.excerpt}
      />
      <article>
        <header>
          aaaand 789
          <h1>{pageContext.frontmatter.title}</h1>
        </header>
        <div>
          <MDXRenderer>{pageContext.body}</MDXRenderer>
        </div>
      </article>
    </Layout>
  )
}

export default BlogMDXLayout
