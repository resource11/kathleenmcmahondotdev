import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import SignupForm from "../components/signupform"
import Img from "gatsby-image"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      file(relativePath: { eq: "images/daylilies-in-july.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fixed(width: 400, height: 400, grayscale: true) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title={data.site.siteMetadata.title} />
      <h1>About {data.site.siteMetadata.title}</h1>
      <Img
        fixed={data.file.childImageSharp.fixed}
        alt="Daylilies in the warm summer garden"
      />
      <p>
        I’m an experienced software engineer, product designer, and
        internationally-known conference speaker with a passion for making
        inclusive and accessible experiences.
      </p>
      <p>
        I present talks and lead workshops for designers and engineers on the
        topics of accessibility, React component libraries, design systems, and
        inclusive documentation.
      </p>
      <p>
        When I’m not coding, designing, or speaking, I’m the best Lanterne Rouge
        cyclocrosser you’ll ever meet.
      </p>
      <SignupForm />
    </Layout>
  )
}

export default About
