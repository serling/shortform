import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Search from "./search";

const SiteSearch = ({ placeholderText, labelText, defaultValue }) => {
  const [searchString, setSearchString] = useState(defaultValue);
  const [isLoading, setIsLoading] = useState(false);

  const handleOnKeyPress = e => {
    const { key } = e;

    if (key === "Enter") {
      handleOnSubmit();
    }
  };

  const handleOnChange = e => {
    const { target } = e;

    setSearchString(target.value);
  };

  const handleOnSubmit = () => {
    if (!searchString) return;

    setIsLoading(true);

    const TrimmedSearchInput = searchString.trim();

    window.location.href = `/search/${TrimmedSearchInput}`;
  };

  const handleOnDelete = () => {
    setSearchString("");
  };

  return (
    <div className="site-search">
      <Search
        hideSubmitButton={true}
        id="site-search-0"
        onKeyPress={handleOnKeyPress}
        theme={Search.themes.transparent}
        isDisabled={isLoading}
        placeholderText={placeholderText}
        value={searchString}
        labelText={labelText}
        hideLabel={true}
        onClickDelete={handleOnDelete}
        onChange={handleOnChange}
        onSubmit={handleOnSubmit}
      />
      <style jsx>{`
        .site-search {
        }
      `}</style>
    </div>
  );
};

SiteSearch.propTypes = {
  placeholderText: PropTypes.string,
  labelText: PropTypes.string
};

export default SiteSearch;
