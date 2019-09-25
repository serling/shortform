import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

const themes = {
  default: "default"
};

const Grid = ({ children, theme }) => {
  return (
    <ul
      className={cn("grid", {
        [`grid--${themes[theme]}`]: themes[theme]
      })}
    >
      {React.Children.map(children, child => (
        <li className="grid__item">{child}</li>
      ))}
      <style jsx>
        {`
          .grid {
            $self: &;
            $break-at-sm: 25rem; //400px
            $break-at-md: 50rem; //800px
            $break-at-lg: 64rem; //1024px

            display: flex;
            flex-wrap: wrap;

            @media screen and (min-width: $break-at-md) {
              margin-left: -1rem;
              margin-top: -1rem;
            }

            &__item {
              margin-bottom: 1rem;

              @media screen and (min-width: $break-at-md) {
                margin: 1rem 0 0 1rem;
                flex: 0 0 calc(100% / 3 - 1rem);
              }
            }
          }
        `}
      </style>
    </ul>
  );
};

Grid.defaultProps = {
  theme: themes.default
};

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.oneOf(Object.keys(themes).map(key => themes[key]))
};

Grid.themes = themes;

export default Grid;
