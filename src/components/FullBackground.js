import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import BackgroundImage from "gatsby-background-image"
// import { StyledFullScreenWrapper } from "./SharedStyledComponents"

/**
 * In this functional component a fullscreen <BackgroundImage />  is created.
 * @param className   string    className(s) from styled-components.
 * @param children    nodes     Child-components.
 * @return {*}
 * @constructor
 */
const FullBackground = ({ className, children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "svgs/hero-bg-xsmall.svg" }) {
          relativePath
        }
      }
    `
  )

  // Single Image Data
  const imageData = data.file.relativePath

  return (
    // <StyledFullScreenWrapper>
    <BackgroundImage
      Tag="section"
      className={className}
      fluid={imageData}
      backgroundColor={`#040e18`}
      title="Fullscreen Background"
      id="fullscreenbg"
      role="img"
      aria-label="Fullscreen Background"
      preserveStackingContext={true}
    >
      {children}
    </BackgroundImage>
    // </StyledFullScreenWrapper>
  )
}

const StyledFullBackground = styled(FullBackground)`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default StyledFullBackground
