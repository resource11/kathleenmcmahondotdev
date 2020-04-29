import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"

const Work = () => {
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
      <SEO title={`${data.site.siteMetadata.title} | Work`} />
      <h1>Work</h1>
      <p>Some of my work</p>
    </Layout>
  )
}

export default Work
