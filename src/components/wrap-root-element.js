import React from "react"
import PropTypes from "prop-types"
import { MDXProvider } from "@mdx-js/react"

// inspired by Twitch Livestream with Jason Lengstorf and Chris Biscardi's blog post:
// https://www.christopherbiscardi.com/post/using-mdx-scope-in-react-live-scope/

// pass the custom components at the root level
export const wrapRootElement = ({ element }) => {
  return <MDXProvider>{element}</MDXProvider>
}

export default wrapRootElement

wrapRootElement.propTypes = {
  element: PropTypes.object,
}
