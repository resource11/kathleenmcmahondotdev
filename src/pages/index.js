import React from "react"
import { graphql } from "gatsby"
import classnames from "classnames"
import { useExtraClasses } from "../utils/useExtraClasses"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Card } from "../components/Card"
import { Link } from "../components/Link"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import styles from "../common/styles/pageStyles/Home.module.css"

export const Home = ({
  data: {
    allMdx,
    dataYaml: { recentSpeaking },
  },
  extraClasses,
}) => {
  const css = useExtraClasses(styles, extraClasses)

  const cardListClasses = classnames(css.cardUl, css.stackCardList, css.grid)
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
        <ul className={cardListClasses} role="list">
          {recentSpeaking.map((speak) => (
            <li key={speak.id}>
              <Card
                extraClasses={{ cardFooterWrapper: css.cardFooterWrapper }}
                footerContent={
                  <Link
                    aria-label={speak.ctaAria}
                    extraClasses={{ root: css.cardFooterLink }}
                    icon={faArrowRight}
                    iconAfter={true}
                    size="small"
                    to={speak.link}
                  >
                    {speak.cta}
                  </Link>
                }
                image={speak.image}
                imageAlt={speak.name}
              />
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
                <Link to={`write/${node.frontmatter.slug}`} variant="link">
                  {node.frontmatter.title}
                </Link>
              </li>
              <span>Published: {node.frontmatter.date}</span>
              <p>{node.excerpt}</p>
            </>
          ))}
        </ul>
        <Link to="/write/" variant="link">
          Browse all writing
        </Link>
      </article>
    </Layout>
  )
}

export default Home

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
        cta
        ctaAria
        event
        id
        image
        link
        name
      }
    }
  }
`
