import React, { useState } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import keys from "../utilities/keys";

import Search from "./search";
import Checkbox from "./checkbox";

const queryBooleans = {
  true: true,
  false: ""
};

const SiteSearch = ({
  placeholderText,
  labelText,
  defaultSearchValue,
  defaultIsExperimental,
  defaultIsAudience
}) => {
  const [searchString, setSearchString] = useState(defaultSearchValue);
  const [isExperimental, setIsExperimental] = useState(defaultIsExperimental);
  const [isAudience, setIsAudience] = useState(defaultIsAudience);
  const [queries, setQueries] = useState({
    q: defaultSearchValue,
    lab: defaultIsExperimental,
    audience: defaultIsAudience
  });
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

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

  const handleOnExperimentalChange = e => {
    setIsExperimental(
      isExperimental ? queryBooleans.false : queryBooleans.true
    );
  };

  const handleOnAudienceChange = e => {
    setIsAudience(isAudience ? queryBooleans.false : queryBooleans.true);
  };

  const handleOnExperimentalKeyPress = e => {
    if (e.key === keys.Enter && !isLoading) {
      handleOnExperimentalChange();
    }
  };

  const handleOnAudienceKeyPress = e => {
    if (e.key === keys.Enter && !isLoading) {
      handleOnAudienceChange();
    }
  };

  const handleOnSearchSubmit = () => {
    if (!searchString) return;

    setIsLoading(true);

    router.push({
      pathname: `/search`,
      query: {
        ...queries,
        q: searchString,
        lab: isExperimental,
        audience: isAudience
      }
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
        <div className="site-search__action">
          <Checkbox
            id="experimental-0"
            labelText="Improlab games"
            labelDescription="Experimental games we haven't tested yet."
            onChange={handleOnExperimentalChange}
            onKeyPress={handleOnExperimentalKeyPress}
            isChecked={!!isExperimental}
            isDisabled={isLoading}
          />
        </div>
        <div className="site-search__action">
          <Checkbox
            id="audience-0"
            labelText="Audience friendly"
            labelDescription="Do you want to invite audience members on stage?"
            onChange={handleOnAudienceChange}
            onKeyPress={handleOnAudienceKeyPress}
            isChecked={!!isAudience}
            isDisabled={isLoading}
          />
        </div>
      </div>
      <style jsx>{`
        .site-search {
          &__actions {
            margin-top: 1rem;
            display: flex;
          }

          &__action {
            margin-left: 1rem;
            display: inline-block;

            &:first-child {
              margin-left: 0;
            }
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

export default SiteSearch;
