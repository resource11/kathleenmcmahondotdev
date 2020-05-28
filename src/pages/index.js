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
  },
  extraClasses,
}) => {
  const css = useExtraClasses(styles, extraClasses)

  const cardListClasses = classnames(css.cardUl, css.stackCardList, css.grid)
  const postListClasses = classnames(css.postUl, css.stackPostList)

  return (
    <Layout>
      <SEO title={`Kathleen McMahon | Software Engineer,Designer, Speaker`} />
      <img src={HeadingAccentImage} alt="" className={css.heroImageMasked} />
      <div className={css.temp}>
        <h1>
          Kathleen
          <br />
          McMahon
        </h1>

        <p>
          Hello! I'm Kathleen, an engineer, designer, speaker, and occasional
          writer.
          <br />
          This is the space where I cultivate my interests.{" "}
        </p>
      </div>
      <article className={css.homeWrapper}>
        <header className={css.homeHeader}>
          <h1 className={css.homeH1}>Kathleen McMahon</h1>

          <p className={css.homeIntroPara}>
            Hello! I'm Kathleen, an engineer, designer, speaker, and occasional
            writer.
            <br />
            This is the space where I cultivate my interests.{" "}
          </p>
          <LineDot
            extraClasses={{
              root: css.lineDotRoot,
              lineDotLine: css.lineDotLine,
              lineDotDot: css.lineDotDot,
            }}
          />
        </header>
        <img src={RecentBgMasked} alt="" className={css.recentTalksBgMasked} />
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
                  image={speak.image}
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
          <ul className={postListClasses}>
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
