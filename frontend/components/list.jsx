import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

const themes = {
  unordered: "unordered"
};

const List = ({ children, theme }) => {
  return (
    <ul
      className={cn("list", {
        [`list--${themes[theme]}`]: themes[theme]
      })}
    >
      {React.Children.map(children, child => (
        <li className="list__item">{child}</li>
      ))}
      <style jsx>
        {`
          .list {
            $self: &;
            $break-at-sm: 25rem; //400px
            $break-at-md: 50rem; //800px
            $break-at-lg: 64rem; //1024px

            &__item {
              margin-top: 1rem;

              @media screen and (min-width: $break-at-sm) {
                flex: 0 0 calc(100% / 2 - 0.5rem);
              }
            }

            &--unordered {
              #{$self}__item {
                &:first-child {
                  margin-top: 0;
                }
              }
            }
          }
        `}
      </style>
    </ul>
  );
};

List.defaultProps = {
  theme: themes.unordered
};

List.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.oneOf(Object.keys(themes).map(key => themes[key]))
};

List.themes = themes;

export default List;
