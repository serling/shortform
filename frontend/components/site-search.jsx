import React, { useState } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import cn from "classnames";
import keys from "../utilities/keys";

import Search from "./search";
import Checkbox from "./checkbox";
import Button from "./button";

const themes = {
  complex: "complex",
  simple: "simple"
};

const queryBooleans = {
  true: true,
  false: ""
};

const SiteSearch = ({
  theme,
  searchInputId,
  placeholderText,
  labelText,
  defaultSearchValue,
  defaultIsExperimental,
  defaultIsAudience
}) => {
  const [searchString, setSearchString] = useState(defaultSearchValue);
  const [isExperimental, setIsExperimental] = useState(defaultIsExperimental);
  const [isAudience, setIsAudience] = useState(defaultIsAudience);
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

  const handleOnSubmitButtonClick = () => {
    handleOnSearchSubmit();
  };

  const handleOnSearchSubmit = () => {
    if (!searchString) return;

    setIsLoading(true);

    let queries = {};

    if (searchString) queries["q"] = searchString;

    if (isExperimental) queries["lab"] = isExperimental;

    if (isAudience) queries["audience"] = isAudience;

    router.push({
      pathname: `/search`,
      query: { ...queries }
    });
  };

  const handleOnDelete = () => {
    setSearchString("");
  };

  return (
    <div
      className={cn("site-search", {
        [`site-search--${themes[theme]}`]: themes[theme]
      })}
    >
      <div className="site-search__search">
        <Search
          hideSubmitButton={true}
          id={searchInputId}
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
      {theme === themes.complex && (
        <div className="site-search__complex">
          <div className="site-search__preface">
            <p className="site-search__preface-text">
              Not finding what you're looking for? Adjust your search even
              further:
            </p>
          </div>
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
          <div className="site-search__submit">
            <Button
              text="Look again"
              theme={Button.themes.primary}
              onClick={handleOnSubmitButtonClick}
              disabled={isLoading}
            />
          </div>
        </div>
      )}
      <style jsx>{`
        .site-search {
          $self: &;

          &__actions {
            margin-top: 2rem;
            display: flex;
          }

          &__action {
            margin-left: 1rem;
            display: inline-block;

            &:first-child {
              margin-left: 0;
            }
          }

          &--complex {
            #{$self}__search {
            }
          }

          &__complex {
            margin-top: 2rem;
          }

          &__preface-text {
            font-size: 1.2rem;
          }

          &__submit {
            font-size: 1rem;
            margin-top: 2rem;
            display: flex;
            justify-content: flex-end;
          }
        }
      `}</style>
    </div>
  );
};

SiteSearch.propTypes = {
  placeholderText: PropTypes.string,
  labelText: PropTypes.string,
  searchInputId: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(Object.keys(themes).map(key => themes[key]))
};

SiteSearch.defaultProps = {
  theme: themes.simple
};

SiteSearch.themes = themes;

export default SiteSearch;
