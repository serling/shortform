import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

const themes = {
  label: "label",
  default: "default"
};

const Link = ({ children, theme, href, text }) => {
  return (
    <a
      href={href}
      className={cn("link", {
        [`link--${themes[theme]}`]: themes[theme]
      })}
    >
      <span className="link__content">{children || text}</span>
      <style jsx>
        {`
          .link {
            $self: &;
            display: inline-block;

            &--label {
              padding: 0.2rem 0.5rem;
              background-color: #dc5a5a;
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
