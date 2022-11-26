import React from "react"
import { graphql } from "gatsby"
import classnames from "classnames"
import { useExtraClasses } from "../utils/useExtraClasses"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Card } from "../components/Card"
import { CTALink } from "../components/CTALink"
import { Link } from "../components/Link"
import HeadingAccentImage from "../svgs/hero-masked.svg"
import { LineDot } from "../components/LineDot"
import RecentBgMasked from "../svgs/sm-bot-white-diamond.svg"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import styles from "../common/styles/pageStyles/Home.module.css"

export const Home = ({
  data: {
    allMdx,
    dataYaml: { recentSpeaking },
    image01,
    image02,
    image03,
    image04,
    image05,
    image06,
    image07,
    image08,
    site: {
      siteMetadata: { title },
    },
  },
  extraClasses,
}) => {
  const css = useExtraClasses(styles, extraClasses)

  const cardListClasses = classnames(css.cardUl, css.stackCardList, css.grid)
  const postListClasses = classnames(css.postUl, css.stackPostList)

  /**
   * The fullRecentSpeakingList is a flattened version of the fullRecentSpeaking function. The fullRecentSpeaking function manipulates the recentSpeaking array to include the correct relativePath as part of each recentSpeaking array item's object, in a side-effect manner.
   *
   * When mapping over fullRecentSpeakingList in the return block to generate the Cards, everything works fine in the development environment, however, the build fails when Netlify does the build during deployment.
   *
   * For now, I'm choosing to leverage the side-effected recentSpeaking array in this scenario to get the deploy to build, and will explore how to refactor later.
   */

  const imageArray = [
    {
      relativePath: image01.childImageSharp.fluid,
      name: "images/home/design-systems-carnival.jpg",
    },
    {
      relativePath: image02.childImageSharp.fluid,
      name: "images/home/stealth-mode-north-star.jpg",
    },
    {
      relativePath: image03.childImageSharp.fluid,
      name: "images/home/digital-gardening-with-mdx-magic.jpg",
    },
    {
      relativePath: image04.childImageSharp.fluid,
      name: "images/home/smoothly-inclusive-documentation-with-mdx.jpg",
    },
    {
      relativePath: image05.childImageSharp.fluid,
      name: "images/home/accessibility-favored-react-components.jpg",
    },
    {
      relativePath: image06.childImageSharp.fluid,
      name: "images/home/thats-my-jamstack.jpg",
    },
    {
      relativePath: image07.childImageSharp.fluid,
      name: "images/home/a11y-talks-panel-dec-2019.jpg",
    },
    {
      relativePath: image08.childImageSharp.fluid,
      name: "images/home/design-systems-and-mdx-in-gatsby.jpg",
    },
  ]

  const fullRecentSpeaking = recentSpeaking.map((recent) => {
    let tempArr = []
    imageArray.forEach((node) => {
      if (recent.image === node.name) {
        let updatedNode = Object.assign(recent, {
          relativePath: node.relativePath,
        })
        tempArr.push(updatedNode)
      }
    })
    return tempArr
  })

  /**
   * Keeping the line below commented out.
   * Netlify won't build even though we're
   * not using this const presently.
   */
  // const fullRecentSpeakingList = fullRecentSpeaking.flat()

  return (
    <Layout>
      <SEO title={title} />
      <img src={HeadingAccentImage} alt="" className={css.heroImageMasked} />
      <article className={css.bodyWrapper}>
        <article className={css.contentWrapper}>
          <header className={css.homeHeader}>
            <h1 className={css.homeH1}>Kathleen McMahon</h1>

            <p className={css.homeIntroPara}>
              Hello! I'm Kathleen, an engineer, designer, speaker, and
              occasional writer. This is the space where I cultivate my
              interests.
            </p>
            <LineDot
              extraClasses={{
                root: css.lineDotRoot,
                lineDotLine: css.lineDotLine,
                lineDotDot: css.lineDotDot,
              }}
            />
          </header>
          <img
            src={RecentBgMasked}
            alt=""
            className={css.recentTalksBgMasked}
          />
          <article className={css.recentTalks}>
            <h2 className={css.recentTalksH2}>
              Recent talks, <br />
              podcasts, streams
            </h2>
            <ul className={cardListClasses} role="list">
              {recentSpeaking.map((speak) => (
                <li key={speak.id} className={css.cardListItem}>
                  <Card
                    extraClasses={{
                      cardContentWrapper: css.cardContentWrapper,
                      cardFooterWrapper: css.cardFooterWrapper,
                    }}
                    footerContent={
                      <Link
                        aria-label={speak.ctaAria}
                        extraClasses={{
                          root: css.cardFooterLink,
                          iconSpan: css.cardFooterLinkIcon,
                        }}
                        icon={faArrowRight}
                        iconAfter={true}
                        size="small"
                        to={speak.link}
                      >
                        {speak.cta}
                      </Link>
                    }
                    image={speak.relativePath}
                    imageAlt={speak.name}
                  />
                </li>
              ))}
            </ul>
            <CTALink
              size="small"
              to="/speak/"
              variant="link"
              extraClasses={{ root: css.ctaLink, iconSpan: css.ctaLinkIcon }}
            >
              Browse all media
            </CTALink>
          </article>
          <hr className={css.purpleRedHR} />
          <article className={css.featuredPosts}>
            <h2>Featured posts</h2>
            <ul className={postListClasses} role="list">
              {allMdx.edges.map(({ node }) => (
                <li key={node.id} className={css.postListItem}>
                  <Link
                    to={`write/${node.frontmatter.slug}`}
                    variant="link"
                    extraClasses={{ root: css.postListLink }}
                  >
                    {node.frontmatter.title}
                  </Link>
                  <span className={css.postListPublishedDate}>
                    <span className={css.postListPublished}>Published:</span>{" "}
                    {node.frontmatter.date}
                  </span>
                  <p className={css.postListExcerpt}>{node.excerpt}</p>
                </li>
              ))}
            </ul>
            <CTALink
              size="small"
              to="/write/"
              variant="link"
              extraClasses={{ root: css.ctaLink, iconSpan: css.ctaLinkIcon }}
            >
              Browse all writing
            </CTALink>
          </article>
        </article>
      </article>
    </Layout>
  )
}

export default Home

export const cardImage = graphql`
  fragment cardImage on File {
    childImageSharp {
      fluid(srcSetBreakpoints: [200, 340, 520, 890]) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const indexQuery = graphql`
  query {
    allMdx(
      filter: { frontmatter: { isFeatured: { eq: true } } }
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      edges {
        node {
          id
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
    image01: file(
      relativePath: { eq: "images/home/design-systems-carnival.jpg" }
    ) {
      ...cardImage
    }
    image02: file(
      relativePath: { eq: "images/home/stealth-mode-north-star.jpg" }
    ) {
      ...cardImage
    }
    image03: file(
      relativePath: { eq: "images/home/digital-gardening-with-mdx-magic.jpg" }
    ) {
      ...cardImage
    }
    image04: file(
      relativePath: {
        eq: "images/home/smoothly-inclusive-documentation-with-mdx.jpg"
      }
    ) {
      ...cardImage
    }
    image05: file(
      relativePath: {
        eq: "images/home/accessibility-favored-react-components.jpg"
      }
    ) {
      ...cardImage
    }
    image06: file(relativePath: { eq: "images/home/thats-my-jamstack.jpg" }) {
      ...cardImage
    }
    image07: file(
      relativePath: { eq: "images/home/a11y-talks-panel-dec-2019.jpg" }
    ) {
      ...cardImage
    }
    image08: file(
      relativePath: { eq: "images/home/design-systems-and-mdx-in-gatsby.jpg" }
    ) {
      ...cardImage
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
