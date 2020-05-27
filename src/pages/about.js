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
    site: {
      siteMetadata: { title },
    },
    dataYaml: { portfolioList },
  },
  extraClasses,
}) => {
  const { socialLinks } = data

  const css = useExtraClasses(styles, extraClasses)

  const cardListClasses = classnames(css.cardUl, css.stackCardList)
  const socialListClasses = classnames(css.socialUl, css.stackSocialList)
  const cardListItemClasses = classnames(css.cardListItem, css.liReset)
  const socialListItemClasses = classnames(css.socialListItem, css.liReset)

  return (
    <Layout>
      <SEO title={title} />
      <img src={HeadingAccentImage} alt="" className={css.headingAccentImage} />
      <article className={css.pageMeasure}>
        <header>
          <h1 className={css.aboutH1}>What I do</h1>
        </header>

        <p className={css.aboutIntroPara}>
          So... you want to know more about me? OK. Well, I'm fullstack engineer
          with a design background. In other words, I really enjoy the{" "}
          <a href="https://bradfrost.com/blog/post/frontend-design-react-and-a-bridge-over-the-great-divide/">
            front of the frontend
          </a>
          , digging into new technologies, and talking about accessibility,
          React component libraries, design systems, and inclusive
          documentation.
        </p>
        <p className={css.aboutSecondPara}>
          When I’m not coding, designing, or speaking about things, I’m the best
          Lanterne Rouge cyclocrosser you’ll ever meet.
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
                image={port.image}
                imageAlt={port.name}
              />
            </li>
          ))}
        </ul>
        <hr className={css.redOrangeHR} />
        <h2>Social links</h2>
        <p>Here are some of the ways you can get in touch with me:</p>
        <ul className={socialListClasses}>
          {socialLinks.map((social) => (
            <li key={social.name} className={socialListItemClasses}>
              <Link
                extraClasses={{ root: css.socialListLink }}
                icon={["fab", social.icon]}
                size="large"
                to={social.link}
              >
                {social.name}
              </Link>
            </li>
          ))}
        </ul>
        <hr className={css.redOrangeHR} />
        <h2>Contact Me</h2>
        <p>You may also reach me by email</p>
        <ContactForm />
      </article>
    </Layout>
  )
}

export default About

export const aboutQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    dataYaml {
      portfolioList {
        cta
        id
        image
        link
        name
      }
    }
  }
`
