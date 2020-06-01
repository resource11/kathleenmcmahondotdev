import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"
import { useExtraClasses } from "../../utils/helpers"
import Img from "gatsby-image"
import styles from "./Card.module.css"

export const Card = ({
  children,
  display,
  extraClasses,
  footerContent,
  horizontal,
  image,
  imageAlt,
}) => {
  const css = useExtraClasses(styles, extraClasses)
  const cardCSS = classnames(css.root, css[display], {
    [css.horizontal]: horizontal,
  })
  return (
    <article className={cardCSS}>
      {image && (
        <header className={css.cardHeader}>
          <Img fluid={image} alt={imageAlt} loading="eager" />
        </header>
      )}
      <div className={css.cardContentWrapper}>
        {children}
        {footerContent && (
          <footer className={css.cardFooterWrapper}>{footerContent}</footer>
        )}
      </div>
    </article>
  )
}

export default Card

Card.defaultProps = {
  display: "flex",
  imageAlt: "",
}

Card.propTypes = {
  /**
   * Card contents
   */
  children: PropTypes.node,

  /**
   * The CSS display property of the Card wrapper
   */
  display: PropTypes.oneOf(["block", "flex"]),

  /**
   * A map of CSS classes used to override specific CSS in the component
   */
  extraClasses: PropTypes.objectOf(PropTypes.string),

  /**
   * Content to place in the footer region of the Card
   */
  footerContent: PropTypes.node,

  /**
   * Display the Card with image stacked horizontally
   */
  horizontal: PropTypes.bool,

  /**
   * The Card image
   */
  image: PropTypes.string,

  /**
   * The Card image alt attribute
   */
  imageAlt: PropTypes.string,
}
