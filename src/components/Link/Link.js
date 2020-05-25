import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { Link as GatsbyLink } from "gatsby"
import classnames from "classnames"
import { useExtraClasses } from "../../utils/useExtraClasses"
import { Icon } from "../Icon"
import styles from "./Link.module.css"

export const LinkSizes = {
  small: "small",
  large: "large",
}

export const LinkVariants = {
  a: "a",
  link: "link",
}

export const Link = ({
  ariaCurrent,
  ariaLabel,
  children,
  extraClasses,
  icon,
  iconAfter,
  linkRef,
  size,
  to,
  variant,
}) => {
  const css = useExtraClasses(styles, extraClasses)
  const linkClasses = classnames(css.root, css[size], { [css.hasIcon]: icon })
  const iconClasses = classnames(css.icon, { [css.iconAfter]: iconAfter })
  const linkIcon = icon && (
    <Icon
      icon={icon}
      extraClasses={{ icon: iconClasses, iconSpan: css.iconSpan }}
      size={size !== LinkSizes.small ? "1x" : "sm"}
    />
  )
  const content = (
    <Fragment>
      {!iconAfter && linkIcon}
      {children}
      {iconAfter && linkIcon}
    </Fragment>
  )

  let ariaCurrentValue
  if (ariaCurrent) {
    ariaCurrentValue = ariaCurrent
  }

  if (variant === LinkVariants.a) {
    return (
      <a
        aria-current={ariaCurrentValue}
        aria-label={ariaLabel}
        className={linkClasses}
        href={to}
        ref={linkRef}
      >
        {content}
      </a>
    )
  }

  return (
    <GatsbyLink
      activeClassName={css.activeLink}
      aria-label={ariaLabel}
      className={linkClasses}
      innerRef={linkRef}
      to={to}
    >
      {content}
    </GatsbyLink>
  )
}

export default Link

Link.defaultProps = {
  ariaCurrent: null,
  ariaLabel: null,
  iconAfter: null,
  iconSize: "sm",
  to: "#",
  variant: LinkVariants.a,
}

Link.propTypes = {
  /**
   * Value to be attached to the aria-current of the anchor tag (does not work with link variant)
   */
  ariaCurrent: PropTypes.oneOf([
    "page",
    "step",
    "location",
    "date",
    "time",
    true,
    false,
    null,
  ]),

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
   * Optional icon
   */
  icon: PropTypes.string,

  /**
   * If there is an icon, this sets the size of the icon (Optional)
   */

  iconSize: PropTypes.oneOf([
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
   * If there is an icon, this sets its position relative to the link text
   */
  iconAfter: PropTypes.oneOf([false, null, true]),

  /**
   * Parent-created Ref to the anchor DOM node
   */
  linkRef: PropTypes.instanceOf(Object),

  /**
   * Link size
   */
  size: PropTypes.oneOf(Object.keys(LinkSizes)),

  /**
   * Pathname or location to link to
   */
  to: PropTypes.string,

  /**
   * Determines if an HTML <a> or Gatsby <Link> is created
   */
  variant: PropTypes.oneOf(Object.keys(LinkVariants)),
}
