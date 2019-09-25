import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Icon from "./icon";
import Button from "./button";

const Search = ({
  onChange,
  onClickDelete,
  labelText,
  placeholderText,
  value
}) => {
  const [showDelete, setShowDelete] = useState(false);

  const textInput = React.createRef();

  useEffect(() => {
    setShowDelete(false);
    textInput.current.focus();

    if (value) {
      setShowDelete(true);
    }
  }, [value]);

  return (
    <div className="search">
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
              onClick={onClickDelete}
              iconSize={Button.iconSizes.tiny}
              textIsHidden={true}
              text="delete search string"
            />
          </div>
        )}
      </div>

      <style jsx>{`
        .search {
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
  labelText: "Search the list for a game or exercise",
  placeholderText: ""
};

export default Search;
