import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

const themes = {
  default: "default",
  twoColumns: "twoColumns"
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
              margin-left: -2rem;
              margin-top: -2rem;
            }

            &__item {
              margin-bottom: 2rem;
              flex-basis: 100%;

              @media screen and (min-width: $break-at-md) {
                margin: 2rem 0 0 2rem;
                flex: 0 0 calc(100% / 3 - 2rem);
              }
            }

            &--twoColumns {
              @media screen and (min-width: $break-at-md) {
                margin-left: -2rem;
                margin-top: -3rem;
              }

              #{$self}__item {
                @media screen and (min-width: $break-at-md) {
                  margin: 3rem 0 0 2rem;
                  flex: 0 0 calc(100% / 2 - 2rem);
                }
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
