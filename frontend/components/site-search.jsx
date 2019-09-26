import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Search from "./search";

const SiteSearch = ({ placeholderText, labelText, inputValue }) => {
  const [searchString, setSearchString] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // const handleUserKeyPress = event => {
  //   const { key, keyCode } = event;

  //   if (keyCode === 13 || key === "Enter") {
  //     handleOnSubmit();
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("keydown", handleUserKeyPress);

  //   return () => {
  //     window.removeEventListener("keydown", handleUserKeyPress);
  //   };
  // }, [handleUserKeyPress]);

  const handleOnChange = e => {
    setSearchString(e.target.value);
  };

  const handleOnSubmit = () => {
    setIsLoading(true);

    const TrimmedSearchInput = searchString.trim();

    //TODO on blank?

    window.location.href = `/search/${TrimmedSearchInput}`;
  };

  const handleOnDelete = () => {
    setSearchString("");
  };

  return (
    <div className="site-search">
      <Search
        hideSubmitButton={false}
        id="site-search-0"
        theme={Search.themes.slim}
        isDisabled={isLoading}
        value={searchString}
        placeholderText={placeholderText}
        labelText={labelText}
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
