import React, { useState } from "react";
import PropTypes from "prop-types";

import Icon from "./icon";
import Button from "./button";

const Search = ({ onChange }) => {
  const [value, setValue] = useState("");

  const handleOnClick = () => {
    setValue("");
  };

  return (
    <div className="search">
      <div className="search__wrapper">
        <div className="search__icon">
          <Icon name="icon-missing" />
        </div>
        <div className="search__field">
          <input
            type="text"
            onChange={onChange}
            className="search__input"
            placeholder="find game..."
          />
        </div>
      </div>
      <div className="search__button">
        <Button iconName="close" onClick={handleOnClick} iconSize="tiny" />
      </div>
      <style jsx>{`
        .search {
          display: flex;
          align-items: center;

          &__input {
            padding: 0.5rem 0.5rem 0.5rem 2rem;
            width: 100%;
          }

          &__wrapper {
            position: relative;
            width: 100%;
          }

          &__button {
            transform: translateX(-100%);
          }

          &__icon {
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
  onChange: PropTypes.func.isRequired
};

export default Search;
