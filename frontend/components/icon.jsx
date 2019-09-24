import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

const sizes = {
  tiny: "tiny",
  small: "small",
  medium: "medium",
  large: "large"
};

const Icon = ({ className, name, size }) =>
  !name ? null : (
    <>
      <div
        className={cn(
          "icon",
          `icon--${name}`,
          {
            [`icon--${sizes[size]}`]: sizes[size]
          },
          className
        )}
      >
        <div />
      </div>
      <style jsx>{`
        $icons: (
          icon-missing: "../../static/icons/icon-missing.svg",
          hamburger: "../../static/icons/hamburger.svg",
          close: "../../static/icons/close.svg",
          beaker: "../../static/icons/beaker.svg",
          magnifying-glass: "../../static/icons/magnifying-glass.svg"
        );

        .icon {
          @each $name, $value in $icons {
            &--#{$name} {
              > div {
                background-image: url($value);
              }
            }
          }

          > div {
            width: 100%;
            height: 100%;
            background-position: 50% 50%;
            background-repeat: no-repeat;
            background-size: contain;
          }

          &--tiny {
            width: 18px;
            height: 18px;
          }

          &--small {
            width: 24px;
            height: 24px;
          }

          &--medium {
            width: 44px;
            height: 44px;
          }

          &--large {
            width: 56px;
            height: 56px;
          }
        }
      `}</style>
    </>
  );

Icon.propTypes = {
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  name: PropTypes.string,
  size: PropTypes.string
};

Icon.defaultProps = {
  size: sizes.small
};

Icon.sizes = sizes;

export default Icon;
