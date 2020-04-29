import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"

const Write = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title={`${data.site.siteMetadata.title} | Write`} />
      <h1>Write</h1>
      <p>I write things</p>
    </Layout>
  )
}

export default Write
