import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const DefaultMDXLayout = ({ children, pageContext }) => {
  return (
    <Layout>
      <SEO
        title={pageContext.frontmatter.title}
        description={pageContext.excerpt}
      />
      <article>
        <header>
          <h1>{pageContext.frontmatter.title}</h1>
        </header>
        <div>{children}</div>
      </article>
    </Layout>
  )
}

export default DefaultMDXLayout
