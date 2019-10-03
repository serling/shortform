import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

const Checkbox = ({
  id,
  labelText,
  labelDescription,
  onChange,
  onKeyPress,
  isChecked,
  isDisabled
}) => {
  return (
    <div
      className={cn("checkbox", {
        "checkbox--checked": isChecked,
        "checkbox--disabled": isDisabled
      })}
    >
      <label
        htmlFor={id}
        className="checkbox__label"
        tabIndex={0}
        onKeyPress={onKeyPress}
      >
        <span>
          <div className="checkbox__fake" />
          <input
            id={id}
            type="checkbox"
            className="checkbox__input"
            checked={isChecked}
            onChange={onChange}
            disabled={isDisabled}
          />
        </span>
        <span>
          <span className="checkbox__text">{labelText}</span>
          {labelDescription && (
            <span className="checkbox__description">{labelDescription}</span>
          )}
        </span>
      </label>

      <style jsx>{`
        .checkbox {
          $self: &;

          display: inline-block;

          &__label {
            display: flex;
            cursor: pointer;

            &:hover {
              #{$self}__text {
                border-bottom: 2px solid black;
              }
            }
          }

          &__text {
            border-bottom: 2px solid transparent;
          }

          &__description {
            display: block;
            font-size: 0.8rem;
            margin-top: 0.25rem;
          }

          &__input {
            display: none;
          }

          &--checked {
            #{$self}__fake {
              &:after {
                background-image: url("../../static/icons/close.svg");
              }
            }
          }

          &--disabled {
            #{$self}__fake {
              background-color: #eaeaea;
            }

            &:hover {
              #{$self}__text {
                border-bottom: 2px solid transparent;
              }
            }
          }

          &__fake {
            width: 1rem;
            height: 1rem;
            border: 1px solid black;
            background: white;
            margin-right: 0.5rem;
            position: relative;

            &:after {
              content: "";
              width: 0.75rem;
              height: 0.75rem;
              display: block;
              background-position: 50% 50%;
              background-repeat: no-repeat;
              background-size: contain;
              transform: translate(-50%, -50%);
              position: absolute;
              left: 50%;
              top: 50%;
            }
          }
        }
      `}</style>
    </div>
  );
};

Checkbox.propTypes = {
  isChecked: PropTypes.bool,
  id: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  labelText: PropTypes.string.isRequired,
  labelDescription: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onKeyPress: PropTypes.func
};

export default Checkbox;
