import React from "react"
import { graphql } from "gatsby"
import data from "../../data"
import classnames from "classnames"
import { useExtraClasses } from "../utils/useExtraClasses"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { ContactForm } from "../components/ContactForm"
import { Card } from "../components/Card"
import { Link } from "../components/Link"
import HeadingAccentImage from "../svgs/angled-orange-xs.svg"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import styles from "../common/styles/pageStyles/About.module.css"

const About = ({
  data: {
    dataYaml: { portfolioList },
    image05,
    image06,
    site: {
      siteMetadata: { title },
    },
  },
  extraClasses,
}) => {
  const { socialLinks } = data

  const css = useExtraClasses(styles, extraClasses)

  const cardListClasses = classnames(
    css.cardUl,
    css.cardGrid,
    css.stackCardList
  )
  const socialListClasses = classnames(
    css.socialUl,
    css.socialGrid,
    css.stackSocialList
  )
  const cardListItemClasses = classnames(css.cardListItem, css.liReset)
  const socialListItemClasses = classnames(css.socialListItem, css.liReset)

  /**
   * The fullPortfolioList is a flattened version of the fullPortfolio function. The fullPortfolio function manipulates the portfolioList array to include the correct relativePath as part of each portfolioList array item's object, in a side-effect manner.
   *
   * When mapping over fullPortfolioList in the return block to generate the Cards, everything works fine in the development environment, however, the build fails when Netlify does the build during deployment.
   *
   * For now, I'm choosing to leverage the side-effected portfolioList array in this scenario to get the deploy to build, and will explore how to refactor later.
   */

  const imageArray = [
    {
      relativePath: image05.childImageSharp.fluid,
      name: "images/about/iso-km-me.png",
    },
    {
      relativePath: image06.childImageSharp.fluid,
      name: "images/about/iso-r11.png",
    },
  ]

  const fullPortfolio = portfolioList.map((port, index) => {
    let tempArr = []
    imageArray.forEach((node) => {
      if (port.image === node.name) {
        let updatedNode = Object.assign(port, {
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
  // const fullPortfolioList = fullPortfolio.flat()

  return (
    <Layout>
      <SEO title={title} />
      <article className={css.bodyWrapper}>
        <img
          src={HeadingAccentImage}
          alt=""
          className={css.headingAccentImage}
        />

        <header>
          <h1 className={css.aboutH1}>What I do</h1>
        </header>
        <article className={css.contentWrapper}>
          <p className={css.aboutIntroPara}>
            So... you want to know more about me? OK. Well, I'm fullstack
            engineer with a design background. In other words, I really enjoy
            the{" "}
            <Link to="https://bradfrost.com/blog/post/frontend-design-react-and-a-bridge-over-the-great-divide/">
              front of the frontend
            </Link>
            , digging into new technologies, and talking about accessibility,
            React component libraries, design systems, and inclusive
            documentation.
          </p>
          <p className={css.aboutPara}>
            I’m also a Color Module Specification Editor for the{" "}
            <Link to="https://www.w3.org/community/design-tokens">
              W3C Design Tokens Community Group
            </Link>
            .
          </p>
          <p className={css.aboutPara}>
            When I’m not coding, designing, or speaking about things, I’m the
            best{" "}
            <Link to="https://facebook.com/cxsisters">
              Lanterne Rouge cyclocrosser
            </Link>{" "}
            you’ll ever meet.
          </p>
          <hr className={css.redOrangeHR} />
          <h2>My portfolios</h2>
          <p>
            Here are some of the portfolio sites I've done in the past for my
            consulting business:
          </p>
          <ul className={cardListClasses} role="list">
            {portfolioList.map((port) => (
              <li key={port.id} className={cardListItemClasses}>
                <Card
                  extraClasses={{
                    cardContentWrapper: css.cardContentWrapper,
                    cardFooterWrapper: css.cardFooterWrapper,
                  }}
                  footerContent={
                    <Link
                      aria-label={port.ctaAria}
                      extraClasses={{ root: css.cardFooterLink }}
                      icon={faArrowRight}
                      iconAfter={true}
                      size="small"
                      to={port.link}
                    >
                      {port.cta}
                    </Link>
                  }
                  image={port.relativePath}
                  imageAlt={port.name}
                />
              </li>
            ))}
          </ul>
          <hr className={css.redOrangeHR} />
          <h2>Social links</h2>
          <p>Here are some of the ways you can get in touch with me:</p>
          <ul className={socialListClasses} role="list">
            {socialLinks.map((social) => (
              <li key={social.name} className={socialListItemClasses}>
                <Link
                  extraClasses={{ root: css.socialListLink }}
                  icon={[social.libraryAlias, social.icon]}
                  size="large"
                  to={social.link}
                >
                  {social.name}
                </Link>
              </li>
            ))}
          </ul>
          <hr className={css.redOrangeHR} />
          <h2 id="contact-me">Contact Me</h2>
          <p>You may also reach me by email</p>
          <ContactForm />
        </article>
      </article>
    </Layout>
  )
}

export default About

export const cardImage = graphql`
  fragment cardImage on File {
    childImageSharp {
      fluid(srcSetBreakpoints: [200, 340, 520, 890]) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const aboutQuery = graphql`
  query {
    dataYaml {
      portfolioList {
        cta
        id
        image
        link
        name
      }
    }
    image05: file(relativePath: { eq: "images/about/iso-km-me.png" }) {
      ...cardImage
    }
    image06: file(relativePath: { eq: "images/about/iso-r11.png" }) {
      ...cardImage
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
