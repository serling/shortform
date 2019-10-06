import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import cn from "classnames";
import keys from "../utilities/keys";
import { options } from "../static/data/player-count-options";

import Search from "./search";
import Checkbox from "./checkbox";
import Select from "./select/select";
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
  phrases,
  searchInputId,
  defaultSearchValue,
  defaultIsExperimental,
  defaultIsAudience,
  defaultPlayerCount
}) => {
  const {
    placeholderText,
    clearButtonText,
    labelText,
    complexHeading
  } = phrases;

  const [searchString, setSearchString] = useState(defaultSearchValue);
  const [isExperimental, setIsExperimental] = useState(defaultIsExperimental);
  const [isAudience, setIsAudience] = useState(defaultIsAudience);
  const [playerCount, setPlayerCount] = useState(defaultPlayerCount);
  const [showComplexity, setShowComplexity] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (
      defaultIsAudience ||
      defaultIsExperimental ||
      defaultPlayerCount !== "0"
    )
      setShowComplexity(true);
  }, [defaultIsAudience, defaultPlayerCount, defaultIsExperimental]);

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

  const handleOnPlayerCountChange = value => {
    setPlayerCount(value);
  };

  const handleOnSearchSubmit = () => {
    if (!searchString) return;

    setIsLoading(true);

    let queries = {};

    if (searchString) queries["q"] = searchString;

    if (isExperimental) queries["lab"] = isExperimental;

    if (isAudience) queries["audience"] = isAudience;

    if (playerCount > 0) queries["players"] = playerCount;

    router.push({
      pathname: `/search`,
      query: queries
    });
  };

  const handleOnShowComplexityClick = () => {
    setShowComplexity(!showComplexity);
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

      {theme === themes.complex && (
        <div
          className={cn("site-search__complex", {
            "site-search__complex--hidden": !showComplexity
          })}
        >
          <div className="site-search__toggle">
            <Button
              iconName="caret-up"
              activeIconName="caret-down"
              isIconAfterText={true}
              isActive={showComplexity}
              theme={Button.themes.link}
              text="Not finding what you're looking for?"
              onClick={handleOnShowComplexityClick}
            />
          </div>
          <div className="site-search__complex-content">
            <p className="site-search__complex-heading">{complexHeading}</p>
            <div className="site-search__actions">
              <div className="site-search__action">
                <Checkbox
                  id="experimental-0"
                  labelText="No lab games"
                  labelDescription="exclude experimental games we haven't tested yet."
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
                  labelDescription="Only show games where audience members can join?"
                  onChange={handleOnAudienceChange}
                  onKeyPress={handleOnAudienceKeyPress}
                  isChecked={!!isAudience}
                  isDisabled={isLoading}
                />
              </div>
            </div>
            <div className="site-search__actions">
              <div className="site-search__action">
                <Select
                  labelText="How many players do you want on stage?"
                  id="player-count-0"
                  name="players"
                  onChange={handleOnPlayerCountChange}
                  options={options}
                  defaultSelectedValue={playerCount}
                />
              </div>
            </div>
            <div className="site-search__submit">
              <Button
                text="Look harder"
                theme={Button.themes.primary}
                onClick={handleOnSubmitButtonClick}
                disabled={isLoading}
              />
            </div>
          </div>
        </div>
      )}
      <style jsx>{`
        .site-search {
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

          &__complex-heading {
            margin-bottom: 2rem;
            font-size: 1.2rem;
          }

          &__complex-content {
            padding: 1rem;
            background-color: white;
          }

          &--complex {
          }

          &__complex {
            margin-top: 2rem;

            &--hidden {
              #{$self}__complex-content {
                display: none;
              }
            }
          }

          &__toggle {
            margin-bottom: 1rem;
          }

          &__submit {
            font-size: 1rem;
            margin-top: 2rem;
            display: flex;
            justify-content: flex-end;
            border-top: 1px solid #d8d7d7;
            padding-top: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

SiteSearch.propTypes = {
  searchInputId: PropTypes.string.isRequired,
  phrases: PropTypes.shape({
    placeholderText: PropTypes.string,
    labelText: PropTypes.string
  }).isRequired,
  theme: PropTypes.oneOf(Object.keys(themes).map(key => themes[key]))
};

SiteSearch.defaultProps = {
  theme: themes.simple
};

SiteSearch.themes = themes;

export default SiteSearch;
