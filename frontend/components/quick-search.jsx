import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import keys from "../utilities/keys";
import { useRouter } from "next/router";

import Search from "./search";

const QuickSearch = ({ phrases, searchInputId }) => {
  const { placeholderText, clearButtonText, labelText } = phrases;

  const router = useRouter();

  const [searchString, setSearchString] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleOnSearchStringKeyPress = e => {
    const { key } = e;

    if (key === keys.Enter) {
      handleOnSearchSubmit();
    }
  };

  const handleOnSearchStringChange = e => {
    const { target } = e;

    setSearchString(target.value);
  };

  const handleOnSearchSubmit = async () => {
    if (!searchString) return;

    setIsLoading(true);

    router.push({ pathname: "/search", query: { q: searchString } });
  };

  const handleOnDelete = () => {
    setSearchString("");
  };

  return (
    <div className="quick-search">
      <div className="quick-search__search">
        <Search
          iconName="magnifying-glass"
          hideSubmitButton={true}
          id={searchInputId}
          clearButtonText={clearButtonText}
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
      </div>
      <style jsx>{`
        .quick-search {
          $self: &;
          $break-at-sm: 25rem; //400px
          $break-at-md: 50rem; //800px
          $break-at-lg: 64rem; //1024px

          &__actions {
            display: flex;
            flex-wrap: wrap;
            margin-top: 1rem;

            @media screen and (min-width: $break-at-md) {
              margin-left: -1rem;
              margin-top: -1rem;
              margin-bottom: 2rem;
            }
          }

          &__action {
            margin-bottom: 1rem;

            @media screen and (min-width: $break-at-md) {
              margin-left: 1rem;
              margin-top: 1rem;
              margin-bottom: 0;
            }
          }

          &__toggle {
            margin-bottom: 1rem;
          }

          &__subheading {
            font-size: 2rem;
            margin-top: 2rem;
            margin-bottom: 2rem;
            border-bottom: 1px solid #eaeaea;
            padding-bottom: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

QuickSearch.propTypes = {
  searchInputId: PropTypes.string.isRequired,
  phrases: PropTypes.shape({
    placeholderText: PropTypes.string,
    labelText: PropTypes.string
  }).isRequired
};

export default QuickSearch;
