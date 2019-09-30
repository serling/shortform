import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Grid from "./grid";
import Game from "./game";
import Checkbox from "./checkbox";
import Search from "./search";

//TODO: LOAD MORE

const FilteredGamesList = ({ games, noMatchesText }) => {
  const [filteredGames, setFilteredGames] = useState(games);
  const [searchString, setSearchString] = useState("");
  const [isCheckboxChecked, setCheckboxChecked] = useState(false);
  const [activeFilters, setActiveFilters] = useState({});

  const handleOnChange = e => {
    const value = e.target.value.toString().toLowerCase();

    setActiveFilters(() => {
      return { ...activeFilters, search: value };
    });

    setSearchString(() => {
      return value;
    });
  };

  const handleOnClickDelete = e => {
    setSearchString("");

    setActiveFilters(() => {
      return { ...activeFilters, search: "" };
    });
  };

  const handleOnCheckboxKeyPress = e => {
    if (e.key === "Enter") {
      onCheckboxChange();
    }
  };

  //TODO:special characters crash
  useEffect(() => {
    setFilteredGames(() => {
      return games.filter(game => {
        const { title, description, alternateTitles, playerCount } = game;

        let activeFilteredGames = games;

        const stringToMatch = `${title} ${description} ${alternateTitles &&
          alternateTitles.toString()}`;

        activeFilteredGames =
          stringToMatch.toLowerCase().search(activeFilters.search) !== -1 &&
          playerCount.toString().search(activeFilters.count) !== -1;

        return activeFilteredGames;
      });
    });
  }, [activeFilters]);

  const onCheckboxChange = e => {
    if (isCheckboxChecked) {
      setCheckboxChecked(false);

      setActiveFilters(() => {
        return { ...activeFilters, count: "" };
      });
    } else {
      setCheckboxChecked(true);

      setActiveFilters(() => {
        return { ...activeFilters, count: "2" };
      });
    }
  };

  return (
    <div className="filtered-games-list">
      <div className="filtered-games-list__filters">
        <div className="filtered-games-list__search">
          <Search
            id="filtered-games-search-0"
            labelText="Filter the list of games below"
            placeholderText="e.g. genres, players, director, etc"
            value={searchString}
            onChange={handleOnChange}
            onClickDelete={handleOnClickDelete}
          />
        </div>
        <Checkbox
          onKeyPress={handleOnCheckboxKeyPress}
          onChange={onCheckboxChange}
          isChecked={isCheckboxChecked}
          labelText="For 2 players"
        />
      </div>
      {filteredGames.length > 0 && (
        <div className="filtered-games-list__list">
          <Grid theme={Grid.themes.twoColumns}>
            {filteredGames.map(game => {
              const { _id } = game;

              return <Game {...game} key={_id} />;
            })}
          </Grid>
        </div>
      )}
      <div className="filtered-games-list__messages">
        {filteredGames.length === 0 && (
          <div className="filtered-games-list__message">
            <p>{noMatchesText}</p>
          </div>
        )}
      </div>
      <style jsx>
        {`
          .filtered-games-list {
            $self: &;

            &__search {
              margin-bottom: 1rem;
            }

            &__filters {
              margin-bottom: 2rem;
              border-bottom: 1px solid #eaeaea;
              padding-bottom: 1rem;
            }

            &__list {
            }
          }
        `}
      </style>
    </div>
  );
};

FilteredGamesList.propTypes = {
  games: PropTypes.array.isRequired,
  noMatchesText: PropTypes.string
};

FilteredGamesList.defaultProps = {
  games: [],
  noMatchesText: "No matches found"
};

export default FilteredGamesList;
