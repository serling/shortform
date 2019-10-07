import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import Icon from "./icon";
import Button from "./button";
import Spinner from "./page-loader";
import VisuallyHidden from "./visually-hidden";

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
  iconName,
  onSubmit,
  hideSubmitButton,
  labelText,
  clearButtonText,
  hideLabel,
  isDisabled,
  placeholderText,
  value,
  shouldAutoFocus
}) => {
  const [inputHasText, setInputHasText] = useState(false);

  const textInput = React.createRef();

  useEffect(() => {
    setInputHasText(false);
    if (shouldAutoFocus) textInput.current.focus();

    if (value) {
      setInputHasText(true);
    }
  }, [value]);

  const onHandleClickDelete = e => {
    textInput.current.focus();
    onClickDelete(e);
  };

  return (
    <div
      className={cn("search", {
        "search--icon": iconName,
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
          {iconName && (
            <div className="search__icon">
              <Icon name={iconName} size={Icon.sizes.small} />
            </div>
          )}
          <div className="search__field">
            <input
              ref={textInput}
              onKeyPress={onKeyPress}
              disabled={isDisabled}
              id={id}
              value={value} //TODO: value for delete to work, at expense of uncontrolled vs controlled input
              autoFocus={false}
              type="text"
              onChange={onChange}
              className="search__input"
              placeholder={placeholderText}
            />
            <div className="search__spinner">
              <Spinner theme={Spinner.themes.small} isActive={isDisabled} />
            </div>
            {inputHasText && !isDisabled && (
              <div className="search__clear">
                <button
                  disabled={isDisabled}
                  onClick={onHandleClickDelete}
                  className="search__clear-button"
                >
                  <VisuallyHidden>{clearButtonText}</VisuallyHidden>
                  <Icon name="close" size={Icon.sizes.tiny} />
                </button>
              </div>
            )}
          </div>
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
          $break-at-sm: 25rem; //400px
          $break-at-md: 50rem; //800px
          $break-at-lg: 64rem; //1024px

          &--transparent {
            #{$self}__input {
              border: 0;
              width: 100%;
              border-bottom: 1px solid black;
              background-color: transparent;
            }

            #{$self}__bar {
              width: 100%;
            }
          }

          &--icon {
            #{$self}__input {
              padding-left: 2.5rem;
            }
          }

          &--slim {
            #{$self}__input {
              font-size: 1rem;
            }
          }

          &__input {
            padding: 0.5rem 2.5rem 0.5rem 0.5rem;
            font-size: 0.8rem;

            @media screen and (min-width: $break-at-sm) {
              font-size: 1rem;
            }

            @media screen and (min-width: $break-at-md) {
              font-size: 1.2rem;
            }
          }

          &__wrapper {
            display: flex;
            align-items: center;
          }

          &__bar {
            position: relative;
          }

          &__clear {
            height: 100%;
            position: absolute;
            right: 0;
            top: 0;
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
  isDisabled: PropTypes.bool,
  iconName: PropTypes.string
};

Search.themes = themes;

export default Search;
