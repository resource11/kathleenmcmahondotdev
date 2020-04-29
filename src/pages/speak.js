import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"

const Speak = () => {
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
      <SEO title={`${data.site.siteMetadata.title} | Speaking`} />
      <h1>Speaking</h1>
      <p>I speak about things</p>
    </Layout>
  )
}

export default Speak
