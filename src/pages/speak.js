import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import data from "../../data"
import SEO from "../components/seo"
import Layout from "../components/layout"

const Speak = () => {
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

  console.log(`talks 2018 are  ${talks2018}`)
  return (
    <Layout>
      <SEO title={`${dataQuery.site.siteMetadata.title} | Speaking`} />
      <h1>Speaking</h1>
      <p>
        I speak about things, using metaphors, and gifs. Lots, and lots of gifs.
      </p>
      <hr />
      <h2>Upcoming talks</h2>
      <p>2020</p>
      <ul>
        {upcomingTalks.map((upcoming) => (
          <li key={upcoming.event}>
            <a href={upcoming.eventURL}>{upcoming.event}</a>
            <p>
              {upcoming.eventDate} | {upcoming.eventLocation}
            </p>
          </li>
        ))}
      </ul>
      <hr />
      <h2>Past talks</h2>
      <p>2020</p>
      <ul>
        {talks2020.map((talk) => (
          <li key={talk.event}>
            <a href={talk.eventURL}>{talk.event}</a>
            <a href={talk.talkURL}>{talk.talkName}</a>
            <p>
              {talk.eventDate} | {talk.eventLocation}
            </p>
          </li>
        ))}
      </ul>
      <p>2019</p>
      <ul>
        {talks2019.map((talk) => (
          <li key={talk.event}>
            <a href={talk.eventURL}>{talk.event}</a>
            <a href={talk.talkURL}>{talk.talkName}</a>
            <p>
              {talk.eventDate} | {talk.eventLocation}
            </p>
          </li>
        ))}
      </ul>
      <p>2018</p>
      <ul>
        {talks2018.map((talk) => (
          <li key={talk.event}>
            <a href={talk.eventURL}>{talk.event}</a>
            <a href={talk.talkURL}>{talk.talkName}</a>
            <p>
              {talk.eventDate} | {talk.eventLocation}
            </p>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default Speak
