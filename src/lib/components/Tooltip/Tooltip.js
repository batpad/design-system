import React from "react";
import PropTypes from "prop-types";

/**
 * Tooltip component
 */
export const Tooltip = ({ className, children, open, ...props }) => {
  return (
    <div
      className={["tooltip", className].join(" ")}
      {...props}
    >
      {children}
    </div>
  );
}

Tooltip.propTypes = {
  /**
   * Optional additional CSS classnames
   */
  className: PropTypes.string,
  /**
   * Prop to manually set the tooltip open state
   */
  open: PropTypes.bool,
  /**
   * Optional width prop for the tooltip box (in px).
   */
  width: PropTypes.string,
  /**
   * Optional top css position of the tooltip box (in px).
   */
  top: PropTypes.string,
  /**
   * Optional left css position of the tooltip box (in px).
   */
  left: PropTypes.string,
  /**
   * Optional right css position of the tooltip box (in px).
   */
  right: PropTypes.string,
  /**
   * Optional css position of the wrapping container
   */
  position: PropTypes.string,
  /**
   * Optional placement of the triangular pointer and tooltip box
   */
  placement: PropTypes.string,
  /**
   * The chid nodes that require a tooltip
   */
  children: PropTypes.node.isRequired,
};

Tooltip.defaultProps = {
  className: '',
  open: false,
  modifiers: [],
  width: 'max-content',
  top: null,
  left: null,
  right: null,
  placement: 'left',
  position: 'relative',
};

export default Tooltip;
