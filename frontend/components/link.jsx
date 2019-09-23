import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

const themes = {
  label: "label",
  default: "default"
};

const Link = ({ children, theme, href }) => {
  return (
    <a
      href={href}
      className={cn("link", {
        [`link--${themes[theme]}`]: themes[theme]
      })}
    >
      {children}
      <style jsx>
        {`
          .link {
            display: inline-block;

            &--label {
              padding: 0.2rem 0.5rem;
              background-color: #dc5a5a;
              color: white;
            }

            &--default {
              border-bottom: 1px solid transparent;

              &:hover {
                border-bottom: 1px solid black;
              }
            }
          }
        `}
      </style>
    </a>
  );
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(Object.keys(themes).map(key => themes[key]))
};

Link.defaultProps = {
  theme: themes.default
};

Link.themes = themes;

export default Link;
