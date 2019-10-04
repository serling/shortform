import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Grid from "./grid";
import Game from "./game";
import Search from "./search";

//TODO: LOAD MORE

const FilteredGamesList = ({ games, phrases }) => {
  const { searchLabel, searchPlaceholder, noMatchesText } = phrases;
  const [filteredGames, setFilteredGames] = useState(games);
  const [searchString, setSearchString] = useState("");
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

  //TODO:special characters crash
  useEffect(() => {
    setFilteredGames(() => {
      return games.filter(game => {
        const { title, description, alternateTitles } = game;

        let activeFilteredGames = games;

        const stringToMatch = `${title} ${description} ${alternateTitles &&
          alternateTitles.toString()}`;

        activeFilteredGames =
          stringToMatch.toLowerCase().search(activeFilters.search) !== -1;

        return activeFilteredGames;
      });
    });
  }, [activeFilters]);

  return (
    <div className="filtered-games-list">
      <div className="filtered-games-list__filters">
        <div className="filtered-games-list__search">
          <Search
            id="filtered-games-search-0"
            labelText={searchLabel}
            placeholderText={searchPlaceholder}
            value={searchString}
            onChange={handleOnChange}
            onClickDelete={handleOnClickDelete}
          />
        </div>
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
          }
        `}
      </style>
    </div>
  );
};

FilteredGamesList.propTypes = {
  games: PropTypes.array.isRequired,
  phrases: PropTypes.shape({
    searchLabel: PropTypes.string.isRequired,
    searchPlaceholder: PropTypes.string.isRequired,
    noMatchesText: PropTypes.string.isRequired
  }).isRequired
};

FilteredGamesList.defaultProps = {
  games: []
};

export default FilteredGamesList;
