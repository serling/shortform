import React, { useState } from "react";
import PropTypes from "prop-types";

import Search from "./search";

const SiteSearch = ({ placeholderText, labelText }) => {
  const [searchString, setSearchString] = useState("");

  const handleOnChange = e => {
    setSearchString(e.target.value);
  };

  const handleOnSubmit = () => {
    //TODO: api call to api/search with string
  };

  const handleOnDelete = () => {
    setSearchString("");
  };

  return (
    <div className="site-search">
      <Search
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
