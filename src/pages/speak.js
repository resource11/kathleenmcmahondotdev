import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import classnames from "classnames"
import { useExtraClasses } from "../utils/useExtraClasses"
import data from "../../data"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Link } from "../components/Link"
import styles from "../common/styles/pageStyles/Speak.module.css"

const Speak = ({ extraClasses }) => {
  const css = useExtraClasses(styles, extraClasses)
  const { pastTalks, upcomingTalks } = data
  const dataQuery = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const talks2018 = pastTalks.filter((talk) => talk.eventYear === "2018")
  const talks2019 = pastTalks.filter((talk) => talk.eventYear === "2019")
  const talks2020 = pastTalks.filter((talk) => talk.eventYear === "2020")

  const talkListClasses = classnames(css.cardUl, css.stackList)

  const upcomingTalkListClasses = classnames(css.cardLi, css.upcomingCardLi)
  const pastTalkListClasses = classnames(css.cardLi, css.pastCardLi)

  const upcomingTalkLinkClasses = classnames(
    css.cardLinkRoot,
    css.upcomingCardLinkRoot
  )
  const pastTalkLinkClasses = classnames(css.cardLinkRoot, css.pastCardLinkRoot)

  console.log(`talks 2018 are  ${talks2018}`)
  return (
    <Layout>
      <SEO title={`${dataQuery.site.siteMetadata.title} | Speaking`} />
      <h1>Speaking</h1>
      <p>
        I speak about things, using metaphors, and gifs. Lots, and lots of gifs.
      </p>
      <hr className={css.purpleRedHR} />
      <h2>Upcoming talks</h2>
      <h3 className={css.speakingH3}>2020</h3>
      <ul className={talkListClasses}>
        {upcomingTalks.map((upcoming) => (
          <li key={upcoming.event} className={upcomingTalkListClasses}>
            <Link
              extraClasses={{ root: upcomingTalkLinkClasses }}
              size="small"
              to={upcoming.eventURL}
            >
              {upcoming.event}
            </Link>
            <p className={css.cardDateLocation}>
              {upcoming.eventDate} | {upcoming.eventLocation}
            </p>
          </li>
        ))}
      </ul>
      <hr className={css.purpleRedHR} />
      <h2>Past talks</h2>
      <h3 className={css.speakingH3}>2020</h3>
      <ul className={talkListClasses}>
        {talks2020.map((talk) => (
          <li key={talk.event} className={pastTalkListClasses}>
            <Link
              extraClasses={{ root: pastTalkLinkClasses }}
              size="small"
              to={talk.eventURL}
            >
              {talk.event}
            </Link>
            <Link
              extraClasses={{ root: css.pastCardSublinkRoot }}
              size="small"
              to={talk.talkURL}
            >
              {talk.talkName}
            </Link>
            <p className={css.cardDateLocation}>
              {talk.eventDate} | {talk.eventLocation}
            </p>
          </li>
        ))}
      </ul>
      <h3 className={css.speakingH3}>2019</h3>
      <ul className={talkListClasses}>
        {talks2019.map((talk) => (
          <li key={talk.event} className={pastTalkListClasses}>
            <Link
              extraClasses={{ root: pastTalkLinkClasses }}
              size="small"
              to={talk.eventURL}
            >
              {talk.event}
            </Link>
            <Link
              extraClasses={{ root: css.pastCardSublinkRoot }}
              size="small"
              to={talk.talkURL}
            >
              {talk.talkName}
            </Link>
            <p className={css.cardDateLocation}>
              {talk.eventDate} | {talk.eventLocation}
            </p>
          </li>
        ))}
      </ul>
      <h3 className={css.speakingH3}>2018</h3>
      <ul className={talkListClasses}>
        {talks2018.map((talk) => (
          <li key={talk.event} className={pastTalkListClasses}>
            <Link
              extraClasses={{ root: pastTalkLinkClasses }}
              size="small"
              to={talk.eventURL}
            >
              {talk.event}
            </Link>
            <Link
              extraClasses={{ root: css.pastCardSublinkRoot }}
              size="small"
              to={talk.talkURL}
            >
              {talk.talkName}
            </Link>
            <p className={css.cardDateLocation}>
              {talk.eventDate} | {talk.eventLocation}
            </p>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default Speak
