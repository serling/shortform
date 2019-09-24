import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Icon from "./icon";
import Button from "./button";

const Search = ({ onChange, labelText, placeholderText }) => {
  const [value, setValue] = useState("");
  const [showDelete, setShowDelete] = useState(false);

  const textInput = React.createRef();

  const handleOnClick = () => {
    setValue("");
  };

  useEffect(() => {
    console.log("changed", textInput.current.value);
    setShowDelete(false);

    if (textInput.current.value) {
      setShowDelete(true);
    }
  }, [onChange]);

  return (
    <div className="search">
      <label htmlFor="search" className="search__label">
        {labelText}
      </label>
      <div className="search__wrapper">
        <div className="search__icon">
          <Icon name="magnifying-glass" />
        </div>
        <div className="search__field">
          <input
            ref={textInput}
            id="search"
            autoFocus={true}
            type="text"
            onChange={onChange}
            className="search__input"
            placeholder={placeholderText}
          />
        </div>
        {showDelete && (
          <div className="search__button">
            <Button
              iconName="close"
              onClick={handleOnClick}
              iconSize="tiny"
              textIsHidden={true}
              text="delete search string"
            />
          </div>
        )}
      </div>

      <style jsx>{`
        .search {
          &__input {
            padding: 0.5rem 0.5rem 0.5rem 2rem;
            width: 100%;
          }

          &__wrapper {
            position: relative;
            width: 100%;
            display: flex;
            align-items: center;
          }

          &__button {
            position: absolute;
            right: 0;
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
  onChange: PropTypes.func.isRequired
};

Search.defaultProps = {
  labelText: "Find a game or an exercise",
  placeholderText: ""
};

export default Search;
