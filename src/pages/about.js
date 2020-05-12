import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import SignupForm from "../components/contactform"
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
      <h1>About</h1>
      <Img
        fixed={data.file.childImageSharp.fixed}
        alt="Daylilies in the warm summer garden"
      />
      <p>
        So... you want to know more about me? OK. Well, I'm fullstack engineer
        with a design background. In other words, I really enjoy the{" "}
        <a href="https://bradfrost.com/blog/post/frontend-design-react-and-a-bridge-over-the-great-divide/">
          front of the frontend
        </a>
        , digging into new technologies, and talking about it. My favorite
        presentation and workshop subjects include accessibility, React
        component libraries, design systems, and inclusive documentation.
      </p>
      <p>
        When I’m not coding, designing, or speaking about things, I’m the best
        Lanterne Rouge cyclocrosser you’ll ever meet.
      </p>
      <SignupForm />
    </Layout>
  )
}

export default About
