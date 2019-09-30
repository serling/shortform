import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import Icon from "./icon";

const themes = {
  label: "label",
  default: "default",
  inverted: "inverted",
  cta: "cta"
};

const Link = ({ children, theme, href, text, iconName }) => {
  return (
    <a
      href={href}
      className={cn("link", {
        [`link--${themes[theme]}`]: themes[theme]
      })}
    >
      {iconName && (
        <span className="link__icon">
          <Icon name={iconName} />
        </span>
      )}
      <span className="link__content">{children || text}</span>
      <style jsx>
        {`
          .link {
            $self: &;
            display: inline-block;

            &__icon {
              display: inline-block;
              margin-right: 0.15em;
            }

            &--cta {
              border-bottom: 2px solid transparent;

              &:after {
                content: "→";
                margin-left: 0.2em;
              }

              &:hover {
                border-bottom: 2px solid black;
              }
            }

            &--inverted {
              border-bottom: 2px solid black;

              &:hover {
                border-color: transparent;
              }
            }

            &--label {
              padding: 0.2rem 0.5rem;
              background-color: #a42323;
              color: white;

              &:hover {
                #{$self}__content {
                  border-bottom: 2px solid white;
                }
              }
            }

            &--default {
              border-bottom: 2px solid transparent;

              &:hover {
                border-bottom: 2px solid black;
              }
            }
          }
        `}
      </style>
    </a>
  );
};

Link.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string.isRequired,
  text: PropTypes.string,
  theme: PropTypes.oneOf(Object.keys(themes).map(key => themes[key]))
};

Link.defaultProps = {
  theme: themes.default
};

Link.themes = themes;

export default Link;
