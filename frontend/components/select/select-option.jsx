import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

const SelectOption = ({ isActive, onClick, value, label, text }) => {
  return (
    <div
      className={cn("select-option", {
        "select-option--active": isActive
      })}
      onClick={e => onClick(value, e)}
      tabIndex={value && 0}
    >
      <span
        className={cn("select-option__text", {
          "select-option__text--diffuse": text
        })}
      >
        {label}
      </span>
      <span className="select-option__text">{text}</span>
      <style jsx>
        {`
          .select-option {
            $self: &;
            padding: 1rem;
            border-bottom: 1px solid #d8d7d7;

            &:hover,
            &:focus {
              background: #d8d7d7;
            }

            &--active {
              background-color: #d8d7d7;
            }

            &__text {
              margin-left: 0.5rem;

              &--diffuse {
                color: black;
              }
            }
          }
        `}
      </style>
    </div>
  );
};

SelectOption.propTypes = {
  value: PropTypes.string,
  text: PropTypes.string,
  label: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};

export default SelectOption;
