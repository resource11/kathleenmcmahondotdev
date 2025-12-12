import React from "react"
import classnames from "classnames"
import { useExtraClasses } from "../utils/useExtraClasses"
import data from "../../data"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Link } from "../components/Link"
import HeadingAccentImage from "../svgs/angled-red-purp-xs.svg"
import styles from "../common/styles/pageStyles/Speak.module.css"

const Speak = ({ extraClasses }) => {
  const css = useExtraClasses(styles, extraClasses)
  const { pastTalks, upcomingTalks } = data

  const talks2018 = pastTalks.filter((talk) => talk.eventYear === "2018")

  const talks2019 = pastTalks
    .filter((talk) => talk.eventYear === "2019")
    .reverse()

  const talks2020 = pastTalks
    .filter((talk) => talk.eventYear === "2020")
    .reverse()

  const talks2021 = pastTalks
    .filter((talk) => talk.eventYear === "2021")
    .reverse()

  const talks2022 = pastTalks
    .filter((talk) => talk.eventYear === "2022")
    .reverse()

  const talks2023 = pastTalks
    .filter((talk) => talk.eventYear === "2023")
    .reverse()

  const talks2024 = pastTalks
    .filter((talk) => talk.eventYear === "2024")
    .reverse()

  const talks2025 = pastTalks
    .filter((talk) => talk.eventYear === "2025")
    .reverse()

  const upcomingTalks2026 = upcomingTalks.filter(
    (talk) => talk.eventYear === "2026"
  )

  const talkListClasses = classnames(css.cardUl, css.stackList)
  const upcomingTalkListClasses = classnames(css.cardLi, css.upcomingCardLi)
  const pastTalkListClasses = classnames(css.cardLi, css.pastCardLi)

  const upcomingTalkLinkClasses = classnames(
    css.cardLinkRoot,
    css.upcomingCardLinkRoot
  )
  const pastTalkLinkClasses = classnames(css.cardLinkRoot, css.pastCardLinkRoot)

  return (
    <Layout>
      <SEO title={`Kathleen McMahon | Speaking`} />
      <article className={css.bodyWrapper}>
        <img
          src={HeadingAccentImage}
          alt=""
          className={css.headingAccentImage}
        />

        <header>
          <h1 className={css.speakH1}>Speaking</h1>
        </header>
        <article className={css.contentWrapper}>
          <p className={css.speakIntroPara}>
            I speak about things, using metaphors, and gifs. Lots, and lots of
            gifs.
          </p>
          <hr className={css.purpleRedHR} />
          <h2>Upcoming talks</h2>
          <h3 className={css.speakingH3}>2026</h3>
          <ul className={talkListClasses} role="list">
            {upcomingTalks2026.map((upcoming) => (
              <li key={upcoming.event} className={upcomingTalkListClasses}>
                <Link
                  extraClasses={{ root: upcomingTalkLinkClasses }}
                  size="small"
                  to={upcoming.eventURL}
                >
                  {upcoming.event}
                </Link>
                <p className={css.upcomingCardSublinkRoot}>
                  {upcoming.talkName}
                </p>
                <p className={css.cardDateLocation}>{upcoming.eventLocation}</p>
                {/* <p className={css.cardDateLocation}>
                  {upcoming.eventDate} | {upcoming.eventLocation} |{" "}
                  {upcoming.talkType}
                </p> */}
              </li>
            ))}
          </ul>
          <hr className={css.purpleRedHR} />
          <h2>Past talks</h2>
          <h3 className={css.speakingH3}>2025</h3>
          <ul className={talkListClasses} role="list">
            {talks2025.map((talk) => (
              <li key={talk.event} className={pastTalkListClasses}>
                {talk.eventURL ? (
                  <Link
                    extraClasses={{ root: pastTalkLinkClasses }}
                    size="small"
                    to={talk.eventURL}
                  >
                    {talk.event}
                  </Link>
                ) : (
                  <p className={css.pastCardSublinkRoot}>{talk.event}</p>
                )}
                {talk.talkURL ? (
                  <Link
                    extraClasses={{ root: css.pastCardSublinkRoot }}
                    size="small"
                    to={talk.talkURL}
                  >
                    {talk.talkName}
                  </Link>
                ) : (
                  <p className={css.pastCardSublinkRoot}>{talk.talkName}</p>
                )}
                <p className={css.cardDateLocation}>
                  {talk.eventDate} | {talk.eventLocation} | {talk.talkType}
                </p>
              </li>
            ))}
          </ul>
          <h3 className={css.speakingH3}>2024</h3>
          <ul className={talkListClasses} role="list">
            {talks2024.map((talk) => (
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
                  {talk.eventDate} | {talk.eventLocation} | {talk.talkType}
                </p>
              </li>
            ))}
          </ul>
          <h3 className={css.speakingH3}>2023</h3>
          <ul className={talkListClasses} role="list">
            {talks2023.map((talk) => (
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
                  {talk.eventDate} | {talk.eventLocation} | {talk.talkType}
                </p>
              </li>
            ))}
          </ul>
          <h3 className={css.speakingH3}>2022</h3>
          <ul className={talkListClasses} role="list">
            {talks2022.map((talk) => (
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
                  {talk.eventDate} | {talk.eventLocation} | {talk.talkType}
                </p>
              </li>
            ))}
          </ul>
          <h3 className={css.speakingH3}>2021</h3>
          <ul className={talkListClasses} role="list">
            {talks2021.map((talk) => (
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
                  {talk.eventDate} | {talk.eventLocation} | {talk.talkType}
                </p>
              </li>
            ))}
          </ul>
          <h3 className={css.speakingH3}>2020</h3>
          <ul className={talkListClasses} role="list">
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
                  {talk.eventDate} | {talk.eventLocation} | {talk.talkType}
                </p>
              </li>
            ))}
          </ul>
          <h3 className={css.speakingH3}>2019</h3>
          <ul className={talkListClasses} role="list">
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
                  {talk.eventDate} | {talk.eventLocation} | {talk.talkType}
                </p>
              </li>
            ))}
          </ul>
          <h3 className={css.speakingH3}>2018</h3>
          <ul className={talkListClasses} role="list">
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
                  {talk.eventDate} | {talk.eventLocation} | {talk.talkType}
                </p>
              </li>
            ))}
          </ul>
        </article>
      </article>
    </Layout>
  )
}

export default Speak
