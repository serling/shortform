import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import Icon from "./icon";
import VisuallyHidden from "./visually-hidden";

const themes = {
  primary: "primary"
};

const iconSizes = Icon.sizes;

const Button = ({
  children,
  className,
  onClick,
  isActive,
  disabled,
  textIsHidden,
  iconName,
  activeIconName,
  iconSize,
  theme,
  text
}) => {
  return (
    <>
      <button
        className={cn(
          "button",
          {
            [`button--${themes[theme]}`]: themes[theme]
          },
          className
        )}
        onClick={onClick}
        disabled={disabled}
      >
        {iconName && (
          <div
            className={cn("button__icon", {
              "button--active": isActive,
              [`button__icon--${Icon.sizes[iconSize]}`]: Icon.sizes[iconSize]
            })}
          >
            {activeIconName && (
              <div className={cn("button__active-icon")}>
                <Icon name={activeIconName} size={iconSize} />
              </div>
            )}
            <div className={cn("button__inactive-icon")}>
              <Icon name={iconName} size={iconSize} />
            </div>
            {textIsHidden && (
              <VisuallyHidden>{children || text}</VisuallyHidden>
            )}
          </div>
        )}
        {!textIsHidden && (
          <span className="button__text">{children || text}</span>
        )}
      </button>
      <style jsx>{`
        .button {
          $self: &;
          cursor: pointer;
          width: auto;
          height: auto;
          border: 0;
          padding: 0;
          margin: 0;
          text-align: center;
          text-decoration: none;
          transform: translateZ(0);
          background-color: transparent;

          display: flex;
          align-items: center;

          &:hover,
          &:focus {
            text-decoration: none;

            #{$self}__icon {
              border: 2px solid #eaeaea;
              border-radius: 50%;
            }
          }

          &[disabled] {
            cursor: not-allowed;
          }

          &:focus {
            outline: 1px solid black;
          }

          &__active-icon {
            display: none;
          }

          &--active {
            #{$self}__inactive-icon {
              display: none;
            }

            #{$self}__active-icon {
              display: block;
            }
          }

          &--primary {
            background-color: #2164f3;
            color: white;
            padding: 0.5rem 2rem;

            &:hover,
            &:focus {
              outline: none;
              text-decoration: underline;
            }
          }

          &--icon {
            display: block;
            background: transparent;
            padding: 0;
          }

          &__icon {
            border: 2px solid transparent;
            display: inline-block;
            padding: 0.5rem;

            + #{$self}__text {
              margin-right: 0.5rem;
            }
          }

          &__text {
          }
        }
      `}</style>
    </>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  iconName: PropTypes.string,
  iconSize: PropTypes.string,
  onClick: PropTypes.func,
  theme: PropTypes.oneOf(Object.keys(themes).map(key => themes[key])),
  disabled: PropTypes.bool,
  text: PropTypes.string,
  textIsHidden: PropTypes.bool
};

Button.iconSizes = iconSizes;
Button.themes = themes;

export default Button;
