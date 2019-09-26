import React, { useState } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import Icon from "./icon";

const Checkbox = ({ labelText, onChange, isChecked }) => {
  return (
    <div className={cn("checkbox", { "checkbox--checked": isChecked })}>
      <label className="checkbox__label">
        <div className="checkbox__fake" />
        <input
          type="checkbox"
          className="checkbox__input"
          checked={isChecked}
          onChange={onChange}
        />
        <span className="checkbox__text">{labelText}</span>
      </label>

      <style jsx>{`
        .checkbox {
          $self: &;

          &__label {
            display: flex;
            align-items: center;
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
  onChange: PropTypes.func.isRequired
};

export default Checkbox;
