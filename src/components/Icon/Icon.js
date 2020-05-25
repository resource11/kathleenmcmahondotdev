import React from "react"
import PropTypes from "prop-types"
import "../../utils/fontawesome"
import { useExtraClasses } from "../../utils/useExtraClasses"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./Icon.module.css"

export const Icon = ({ icon, extraClasses, size, title }) => {
  const css = useExtraClasses(styles, extraClasses)
  return (
    <span className={css.iconSpan}>
      <FontAwesomeIcon
        className={css.icon}
        icon={icon}
        size={size}
        title={title}
      />
    </span>
  )
}

export default Icon

Icon.defaultProps = {
  size: "xs",
  title: null,
}

Icon.propTypes = {
  /**
   * A map of CSS classes to be appended to DOM nodes internally
   */
  extraClasses: PropTypes.object,
  /**
   * A map of CSS classes used to override specific CSS in the component
   */
  icon: PropTypes.object,
  /**
   * The available sizes for the FontAwesomeIcon used in this component
   * https://github.com/FortAwesome/react-fontawesome#features
   */
  size: PropTypes.oneOf([
    "lg",
    "xs",
    "sm",
    "1x",
    "2x",
    "3x",
    "4x",
    "5x",
    "6x",
    "7x",
    "8x",
    "9x",
    "10x",
  ]),
  /**
   * Used to add a visually-hidden title to the SVG under the hood. This title is announced by screen readers
   */
  title: PropTypes.string,
}
