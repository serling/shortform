import React from "react";
import PropTypes from "prop-types";

import SelectOption from "./select-option";

const SelectOptions = ({ options, onClick, activeValue }) => (
  <ul className="select-options">
    {options.map(option => {
      const { id, value } = option;

      return (
        <li key={id}>
          <SelectOption
            {...option}
            onClick={onClick}
            isActive={value === activeValue}
          />
        </li>
      );
    })}
    <style jsx>
      {`
        .select-options {
          position: absolute;
          background: white;
          min-width: 100%;
          z-index: 10;
          box-shadow: -5px 3px 9px -3px rgba(214, 214, 214, 0.5);
        }
      `}
    </style>
  </ul>
);

SelectOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      id: PropTypes.string.isRequired
    })
  ).isRequired,
  activeValue: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

export default SelectOptions;
