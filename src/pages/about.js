import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import data from "../../data"
import SEO from "../components/seo"
import Layout from "../components/layout"
import ContactForm from "../components/contactform"
import { Card } from "../components/Card"

const About = () => {
  const { socialLinks } = data
  const dataQuery = useStaticQuery(graphql`
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
      <SEO title={dataQuery.site.siteMetadata.title} />
      <h1>What I do</h1>
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
      <h2>My portfolios</h2>
      <p>Here are some of the portfolio sites I've done:</p>
      <Card />
      <Card />
      <hr />
      <h2>Social links</h2>
      <p>Here are some of the ways you can get in touch with me:</p>
      <ul>
        {socialLinks.map((social) => (
          <li key={social.name}>
            <span>{social.icon} </span>
            <a href={social.link}>{social.name}</a>
          </li>
        ))}
      </ul>
      <hr />
      <ContactForm />
    </Layout>
  )
}

export default About
