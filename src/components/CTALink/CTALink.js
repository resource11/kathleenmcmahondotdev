import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"
import { useExtraClasses } from "../../utils/useExtraClasses"
import { Link, LinkVariants } from "../Link"
import styles from "./CTALink.module.css"

export const CTALinkSizes = {
  small: "small",
  large: "large",
}

export const CTALink = ({
  ariaLabel,
  children,
  extraClasses,
  linkRef,
  size,
  to,
  variant,
}) => {
  const css = useExtraClasses(styles, extraClasses)
  const linkClasses = classnames(css.root, css[size])

  return (
    <Link
      aria-label={ariaLabel}
      extraClasses={{ root: linkClasses, iconSpan: css.iconSpan }}
      href={to}
      icon={"arrow-right"}
      iconAfter={true}
      ref={linkRef}
      variant={variant}
      to={to}
    >
      {children}
    </Link>
  )
}

export default CTALink

CTALink.defaultProps = {
  ariaLabel: null,
  to: "#",
  variant: LinkVariants.a,
}

CTALink.propTypes = {
  /**
   * Applies a visually-hidden label for screen readers
   */
  ariaLabel: PropTypes.string,

  /**
   * Content displayed inside the anchor
   */
  children: PropTypes.node.isRequired,

  /**
   * A map of CSS classes used to override specific CSS in the component
   */
  extraClasses: PropTypes.objectOf(PropTypes.string),

  /**
   * Parent-created Ref to the anchor DOM node
   */
  linkRef: PropTypes.instanceOf(Object),

  /**
   * Link size
   */
  size: PropTypes.oneOf(Object.keys(CTALinkSizes)),

  /**
   * Pathname or location to link to
   */
  to: PropTypes.string,

  /**
   * Determines if an HTML <a> or Gatsby <Link> is created
   */
  variant: PropTypes.oneOf(Object.keys(LinkVariants)),
}
