import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import Icon from "./icon";
import Button from "./button";

const themes = {
  transparent: "transparent"
};

const Search = ({
  onChange,
  onClickDelete,
  theme,
  onSubmit,
  labelText,
  isDisabled,
  placeholderText,
  value,
  shouldAutoFocus
}) => {
  const [showDelete, setShowDelete] = useState(false);

  const textInput = React.createRef();

  useEffect(() => {
    setShowDelete(false);
    if (shouldAutoFocus) textInput.current.focus();

    if (value) {
      setShowDelete(true);
    }
  }, [value]);

  return (
    <div
      className={cn("search", {
        [`search--${themes[theme]}`]: themes[theme]
      })}
    >
      <label htmlFor="search" className="search__label">
        {labelText}
      </label>
      <div className="search__wrapper">
        <div className="search__icon">
          <Icon name="magnifying-glass" size={Icon.sizes.small} />
        </div>
        <div className="search__field">
          <input
            value={value}
            ref={textInput}
            disabled={isDisabled}
            id="search"
            autoFocus={true}
            type="text"
            onChange={onChange}
            className="search__input"
            placeholder={placeholderText}
          />
        </div>
        {showDelete && (
          <div className="search__clear">
            <Button
              iconName="close"
              disabled={isDisabled}
              onClick={onClickDelete}
              iconSize={Button.iconSizes.tiny}
              textIsHidden={true}
              text="clear search string"
            />
          </div>
        )}
      </div>
      {onSubmit && (
        <div className="search__submit">
          <Button
            onClick={onSubmit}
            text="Search"
            theme={Button.themes.primary}
          />
        </div>
      )}
      <style jsx>{`
        .search {
          $self: &;

          &--transparent {
            #{$self}__input {
              border: 0;
              border-bottom: 1px solid black;
              background-color: transparent;
            }
          }

          &__input {
            padding: 0.5rem 0.5rem 0.5rem 2.5rem;
            width: 100%;
            font-size: 1.2rem;
          }

          &__wrapper {
            position: relative;
            width: 100%;
            display: flex;
            align-items: center;
          }

          &__clear {
            position: absolute;
            right: 0;
          }

          &__submit {
            margin-left: 1rem;
          }

          &__field {
            width: 100%;
          }

          &__label {
            margin-bottom: 0.5rem;
            display: block;
          }

          &__icon {
            pointer-events: none;
            position: absolute;
            top: 50%;
            left: 0.5rem;
            transform: translateY(-50%);
          }
        }
      `}</style>
    </div>
  );
};

Search.propTypes = {
  onChange: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired,
  onSubmit: PropTypes.func,
  theme: PropTypes.oneOf(Object.keys(themes).map(key => themes[key])),
  labelText: PropTypes.string,
  placeholderText: PropTypes.string,
  value: PropTypes.string,
  shouldAutoFocus: PropTypes.bool,
  isDisabled: PropTypes.bool
};

Search.defaultProps = {
  labelText: "",
  placeholderText: ""
};

Search.themes = themes;

export default Search;
