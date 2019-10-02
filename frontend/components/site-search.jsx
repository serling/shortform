import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

import Search from "./search";
import Checkbox from "./checkbox";

const SiteSearch = ({
  placeholderText,
  labelText,
  defaultSearchValue,
  defaultIsExperimental
}) => {
  const [searchString, setSearchString] = useState(defaultSearchValue);
  const [isExperimental, setIsExperimental] = useState(defaultIsExperimental);
  const [queries, setQueries] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setQueries({ ...queries, q: searchString });
  }, [searchString]);

  useEffect(() => {
    setQueries({ ...queries, lab: isExperimental });
  }, [isExperimental]);

  const handleOnSearchStringKeyPress = e => {
    const { key } = e;

    if (key === "Enter") {
      handleOnSearchSubmit();
    }
  };

  const handleOnSearchStringChange = e => {
    const { target } = e;

    setSearchString(target.value);
  };

  const handleOnExperimentalChange = e => {
    if (isExperimental) {
      setIsExperimental(false);
    } else {
      setIsExperimental(true);
    }
  };

  const handleOnExperimentalKeyPress = e => {
    if (e.key === "Enter") {
      handleOnExperimentalChange();
    }
  };

  const handleOnSearchSubmit = () => {
    if (!searchString) return;

    setIsLoading(true);

    console.log("sending", queries);

    router.push({
      pathname: `/search`,
      query: queries
    });
  };

  const handleOnDelete = () => {
    setSearchString("");
  };

  return (
    <div className="site-search">
      <Search
        hideSubmitButton={true}
        id="site-search-0"
        onKeyPress={handleOnSearchStringKeyPress}
        theme={Search.themes.transparent}
        isDisabled={isLoading}
        placeholderText={placeholderText}
        value={searchString}
        labelText={labelText}
        hideLabel={true}
        onClickDelete={handleOnDelete}
        onChange={handleOnSearchStringChange}
        onSubmit={handleOnSearchSubmit}
      />
      <div className="site-search__actions">
        <Checkbox
          labelText="experimental"
          onChange={handleOnExperimentalChange}
          onKeyPress={handleOnExperimentalKeyPress}
          isChecked={isExperimental}
        />
      </div>
      <style jsx>{`
        .site-search {
          &__actions {
            margin-top: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

SiteSearch.propTypes = {
  placeholderText: PropTypes.string,
  labelText: PropTypes.string
};

// SiteSearch.defaultProps = {
//   defaultIsExperimental: false,
//   defaultSearchValue: ""
// };

export default SiteSearch;
