import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"
import { useExtraClasses } from "../../utils/useExtraClasses"
import { Icon } from "../Icon"
import styles from "./Button.module.css"

export const ButtonSizes = {
  small: "small",
  large: "large",
}

export const Button = ({
  ariaExpanded,
  ariaLabel,
  buttonRef,
  children,
  disabled,
  extraClasses,
  icon,
  iconOnlyBtn,
  onClick,
  size,
  type,
}) => {
  const css = useExtraClasses(styles, extraClasses)

  const buttonClasses = classnames(css.root, css[size])

  return (
    <button
      aria-expanded={ariaExpanded}
      aria-label={ariaLabel}
      className={buttonClasses}
      disabled={disabled}
      onClick={onClick}
      ref={buttonRef}
      type={type}
    >
      <span className={css.btnContentWrap}>
        {children}
        {icon && (
          <Icon
            icon={icon}
            extraClasses={!iconOnlyBtn ? { icon: css.icon } : null}
            size={size !== ButtonSizes.small ? "lg" : "sm"}
          />
        )}
      </span>
    </button>
  )
}

export default Button

Button.defaultProps = {
  ariaExpanded: null,
  ariaLabel: null,
  disabled: null,
  iconOnlyBtn: false,
}

Button.propTypes = {
  /**
   * Allows the button to act as a toggle for a sibling container
   */
  ariaExpanded: PropTypes.oneOf([false, null, true]),

  /**
   * Applies a visually-hidden label for screen readers
   */
  ariaLabel: PropTypes.string,

  /**
   * Attaches a reference to this component
   */
  buttonRef: PropTypes.instanceOf(Object),

  /**
   * Button label
   */
  children: PropTypes.node,

  /**
   * Determines if this button is disabled
   */
  disabled: PropTypes.bool,

  /**
   * A map of CSS classes used to override specific CSS in the component
   */
  extraClasses: PropTypes.objectOf(PropTypes.string),

  /**
   * Show an icon in your button. This value should exactly match a name in the Icon component
   */
  icon: PropTypes.object,

  /**
   * Show a button with an icon and without visible text. Pair this with ariaLabel to customize what is announced to screen readers
   */
  iconOnlyBtn: PropTypes.bool,

  /**
   * Called when this button is clicked
   */
  onClick: PropTypes.func,

  /**
   * Button size
   */
  size: PropTypes.oneOf(Object.keys(ButtonSizes)),

  /**
   * Button type
   */
  type: PropTypes.oneOf(["button", "reset", "submit"]),
}
