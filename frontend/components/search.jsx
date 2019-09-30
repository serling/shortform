import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import Icon from "./icon";
import Button from "./button";
import Spinner from "./page-loader";

const themes = {
  transparent: "transparent",
  slim: "slim"
};

const Search = ({
  id,
  onChange,
  onKeyPress,
  onClickDelete,
  theme,
  onSubmit,
  hideSubmitButton,
  labelText,
  hideLabel,
  isDisabled,
  placeholderText,
  value,
  shouldAutoFocus
}) => {
  const [inputHasText, setInputHasText] = useState(false);

  const textInput = React.createRef();

  //TODO: set focus when clear button is clicked

  useEffect(() => {
    setInputHasText(false);
    if (shouldAutoFocus) textInput.current.focus();

    if (value) {
      setInputHasText(true);
    }
  }, [value]);

  return (
    <div
      className={cn("search", {
        [`search--${themes[theme]}`]: themes[theme]
      })}
    >
      <label
        htmlFor={id}
        className={cn("search__label", { "search__label--hidden": hideLabel })}
      >
        {labelText}
      </label>
      <div className="search__wrapper">
        <div className="search__bar">
          <div className="search__icon">
            <Icon name="magnifying-glass" size={Icon.sizes.small} />
          </div>
          <div className="search__field">
            <input
              ref={textInput}
              onKeyPress={onKeyPress}
              disabled={isDisabled}
              id={id}
              value={value}
              autoFocus={false}
              type="text"
              onChange={onChange}
              className="search__input"
              placeholder={placeholderText}
            />
            {isDisabled && (
              <div className="search__spinner">
                <Spinner theme={Spinner.themes.small} />
              </div>
            )}
          </div>
          {inputHasText && !isDisabled && (
            <div className="search__clear">
              <button
                disabled={isDisabled}
                onClick={onClickDelete}
                className="search__clear-button"
              >
                <span className="search__clear-label">clear search string</span>
                <Icon name="close" size={Icon.sizes.tiny} />
              </button>
            </div>
          )}
        </div>
        <div className="search__actions">
          {onSubmit && !hideSubmitButton && (
            <div className="search__submit">
              <Button
                disabled={!inputHasText || isDisabled}
                onClick={onSubmit}
                text="Search"
                theme={Button.themes.primary}
              />
            </div>
          )}
        </div>
      </div>

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

          &--slim {
            #{$self}__input {
              padding: 0.25rem 0.5rem 0.25rem 2.5rem;
              font-size: 1rem;
            }
          }

          &__input {
            padding: 0.5rem 0.5rem 0.5rem 2.5rem;
            width: 100%;
            font-size: 1.2rem;
          }

          &__wrapper {
            width: 100%;
            display: flex;
            align-items: center;
          }

          &__bar {
            position: relative;
            width: 100%;
          }

          &__clear {
            height: 100%;
            position: absolute;
            right: 0;
            top: 0;
          }

          &__clear-label {
            display: none;
          }

          &__clear-button {
            padding: 0 1rem;
            height: 100%;
            cursor: pointer;
          }

          &__spinner {
            position: absolute;
            right: 0;
            top: 50%;
            transform: translate(-50%, -50%);
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

            &--hidden {
              position: absolute;
              width: 0;
              height: 0;
              left: -999em;
              overflow: hidden;
            }
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
  hideLabel: PropTypes.bool,
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
