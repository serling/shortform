import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import cn from "classnames";
import keys from "../utilities/keys";

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

const playerCountOptions = [
  {
    id: "zero-0",
    label: "Unimportant",
    value: "0"
  },
  {
    id: "one-0",
    label: "One player",
    value: "1"
  },
  {
    id: "two-0",
    label: "Two players",
    value: "2"
  },
  {
    id: "three-0",
    label: "Three players",
    value: "3"
  },
  {
    id: "four-0",
    label: "Four players",
    value: "4"
  },
  {
    id: "five-0",
    label: "Five players or more",
    value: "5"
  }
];

const SiteSearch = ({
  theme,
  searchInputId,
  placeholderText,
  labelText,
  defaultSearchValue,
  defaultIsExperimental,
  defaultIsAudience,
  defaultPlayerCount
}) => {
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
        <div
          className={cn("site-search__complex", {
            "site-search__complex--hidden": !showComplexity
          })}
        >
          <div className="site-search__preface">
            <Button
              iconName="caret"
              isIconAfterText={true}
              theme={Button.themes.link}
              text="Not finding what you're looking for?"
              onClick={handleOnShowComplexityClick}
            />
          </div>
          <div className="site-search__complex-content">
            <div className="site-search__preface">
              <p className="site-search__preface-text">
                Try fiddling with some more buttons:
              </p>
            </div>
            <div className="site-search__actions">
              <div className="site-search__action">
                <Checkbox
                  id="experimental-0"
                  labelText="Improlab games"
                  labelDescription="Include experimental games we haven't tested yet."
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
                  options={playerCountOptions}
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

          &__complex-content {
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

          &__preface {
            margin: 2rem 0;
          }

          &__preface-text {
            font-size: 1.2rem;
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
