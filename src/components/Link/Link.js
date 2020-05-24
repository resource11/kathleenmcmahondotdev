import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { Link as GatsbyLink } from "gatsby"
import classnames from "classnames"
import { useExtraClasses } from "../../utils/useExtraClasses"
import Icon, { IconSizes } from "../icon/Icon"
import styles from "./Link.module.css"

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
  iconSize,
  iconAfter,
  linkRef,
  onClick,
  to,
  variant,
}) => {
  const css = useExtraClasses(styles, extraClasses)
  const linkClasses = classnames(css.root, { [css.hasIcon]: icon })
  const iconClasses = classnames(css.icon, { [css.iconAfter]: iconAfter })
  const linkIcon = icon && (
    <Icon name={icon} extraClasses={{ root: iconClasses }} size={iconSize} />
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
  } else {
    ariaCurrentValue = null
  }

  if (variant === LinkVariants.a) {
    return (
      <a
        aria-current={ariaCurrentValue}
        aria-label={ariaLabel ? ariaLabel : null}
        onClick={onClick}
        href={to}
        ref={linkRef}
        className={linkClasses}
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
      to={to}
      innerRef={linkRef}
    >
      {content}
    </GatsbyLink>
  )
}

export default Link

Link.defaultProps = {
  ariaLabel: null,
  iconAfter: null,
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

  iconSize: PropTypes.oneOf(IconSizes),

  /**
   * If there is an icon, this sets its position relative to the link text
   */
  iconAfter: PropTypes.oneOf([false, null, true]),

  /**
   * Parent-created Ref to the anchor DOM node
   */
  linkRef: PropTypes.instanceOf(Object),

  /**
   * Called when this anchor is clicked
   */
  onClick: PropTypes.func,

  /**
   * Pathname or location to link to
   */
  to: PropTypes.string,

  /**
   * Determines if an HTML <a> or Gatsby <Link> is created
   */
  variant: PropTypes.oneOf(Object.keys(LinkVariants)),
}
