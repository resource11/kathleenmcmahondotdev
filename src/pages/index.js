import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"

const Home = ({
  data: {
    allMdx,
    dataYaml: { recentSpeaking },
  },
}) => {
  return (
    <Layout>
      <SEO title={`Kathleen McMahon | Software Engineer,Designer, Speaker`} />
      <article>
        <header>
          <h1>Kathleen McMahon</h1>
        </header>
        <p>
          Hello! I'm Kathleen, an engineer, designer, speaker, and occasional
          writer. This is the space where I cultivate my interests.
        </p>
        <h2>Recent talks, podcasts, streams</h2>
        <ul>
          {recentSpeaking.map((speak) => (
            <li key={speak.id}>
              <a href={speak.link}>
                <img src={speak.image} alt={speak.name} />
              </a>
            </li>
          ))}
        </ul>
        <Link to="/speak/">Browse all media</Link>
        <hr />
        <h2>Featured posts</h2>
        <ul>
          {allMdx.edges.map(({ node }) => (
            <>
              <li key={node.id}>
                <Link to={`write/${node.frontmatter.slug}`}>
                  {node.frontmatter.title}
                </Link>
              </li>
              <span>Published: {node.frontmatter.date}</span>
              <p>{node.excerpt}</p>
            </>
          ))}
        </ul>
        <Link to="/write/">Browse all writing</Link>
      </article>
    </Layout>
  )
}

export const indexQuery = graphql`
  query {
    allMdx(filter: { frontmatter: { isFeatured: { eq: true } } }) {
      edges {
        node {
          id
          fields {
            slug
            isFeatured
          }
          frontmatter {
            slug
            title
            date(formatString: "DD MMMM, YYYY")
            isFeatured
          }
          body
        }
      }
      totalCount
    }
    dataYaml {
      recentSpeaking {
        image
        event
        id
        link
        name
      }
    }
  }
`

export default Home
