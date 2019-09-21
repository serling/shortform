import React from "react";
import PropTypes from "prop-types";

import Icon from "./icon";

const Search = ({ onChange }) => {
  return (
    <div className="search">
      <div className="search__wrapper">
        <div className="search__icon">
          <Icon name="close" />
        </div>
        <input type="text" onChange={onChange} className="search__input" />
      </div>
      <style jsx>{`
        .search {
          &__input {
            padding: 0.5rem 0.5rem 0.5rem 2rem;
          }

          &__wrapper {
            position: relative;
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
