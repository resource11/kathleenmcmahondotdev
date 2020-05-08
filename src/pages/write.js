import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
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
      allFile(
        filter: { extension: { eq: "mdx" } }
        sort: { order: DESC, fields: childMdx___frontmatter___date }
      ) {
        edges {
          node {
            childMdx {
              body
              frontmatter {
                author
                date(formatString: "MMMM DD, YYYY")
                path
                title
              }
              excerpt
              id
            }
            changeTime(formatString: "MMMM DD, YYYY")
          }
        }
        totalCount
      }
    }
  `)

  return (
    <Layout>
      <SEO title={`${data.site.siteMetadata.title} | Write`} />
      <article>
        <header>
          <h1>
            Some of my thoughts <small>{data.allFile.totalCount} Posts</small>
          </h1>
          <hr />
        </header>
        <p>
          This is a gathering of all the MDX files that exist in this project
        </p>
        {data.allFile.edges.map(({ node }) => (
          <div key={node.id}>
            <h2>
              <Link to={node.childMdx.frontmatter.path}>
                {node.childMdx.frontmatter.title}
              </Link>
            </h2>
            <span>— {node.childMdx.frontmatter.date}</span>
            <p>{node.childMdx.excerpt}</p>
          </div>
        ))}
      </article>
    </Layout>
  )
}

export default Write
