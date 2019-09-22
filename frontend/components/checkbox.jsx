import React, { useState } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import Icon from "./icon";
import Button from "./button";

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
          }

          &__input {
            display: none;
          }

          &--checked {
            #{$self}__fake {
              &:after {
                content: "v";
              }
            }
          }

          &__fake {
            width: 1rem;
            height: 1rem;
            border: 1px solid black;
            background: white;
            margin-right: 0.5rem;

            &:after {
              content: none;
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
